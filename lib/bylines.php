<?php
/**
 * Server side logic for bylines.
 */

namespace Ups\Blocks;

/** Taxnomy name for storing author terms */
const AUTHOR_TAXONOMY_NAME = 'author';

/** Post meta key name for storing bylines */
const BYLINES_META_KEY = 'bylines';

/**
 * Register author taxonomy for bylines.
 */
add_action(
	'init',
	function () {
		$authors_labels = array(
			'name'                       => _x( 'Authors', 'Taxonomy General Name', 'text_domain' ),
			'singular_name'              => _x( 'Author', 'Taxonomy Singular Name', 'text_domain' ),
			'menu_name'                  => __( 'Authors', 'text_domain' ),
			'all_items'                  => __( 'All Authors', 'text_domain' ),
			'parent_item'                => __( 'Parent Author', 'text_domain' ),
			'parent_item_colon'          => __( 'Parent Author:', 'text_domain' ),
			'new_item_name'              => __( 'New Author Name', 'text_domain' ),
			'add_new_item'               => __( 'Add New Author', 'text_domain' ),
			'edit_item'                  => __( 'Edit Author', 'text_domain' ),
			'update_item'                => __( 'Update Author', 'text_domain' ),
			'view_item'                  => __( 'View Author', 'text_domain' ),
			'separate_items_with_commas' => __( 'Separate authors with commas', 'text_domain' ),
			'add_or_remove_items'        => __( 'Add or remove authors', 'text_domain' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'text_domain' ),
			'popular_items'              => __( 'Popular Authors', 'text_domain' ),
			'search_items'               => __( 'Search Authors', 'text_domain' ),
			'not_found'                  => __( 'Not Found', 'text_domain' ),
			'no_terms'                   => __( 'No authors', 'text_domain' ),
			'items_list'                 => __( 'Authors list', 'text_domain' ),
			'items_list_navigation'      => __( 'Authors list navigation', 'text_domain' ),
			'back_to_items'              => __( 'Back to Authors', 'text_domain' ),
		);
		$authors_args   = array(
			'labels'             => $authors_labels,
			'hierarchical'       => false,
			'public'             => true,
			'show_ui'            => true,
			'show_in_rest'       => true,
			'rest_base'          => 'authors',
			'show_in_quick_edit' => true,
			'meta_box_cb'        => false,
			'show_admin_column'  => true,
			'show_in_nav_menus'  => true,
			'show_in_rest'       => true,
			'show_tagcloud'      => true,
			'query_var'          => 'authors',
		);
		register_taxonomy( AUTHOR_TAXONOMY_NAME, array( 'post' ), $authors_args );

		/**
		 * Store a list of author term IDs in post meta to preserve order.
		 */
		register_post_meta(
			'post',
			BYLINES_META_KEY,
			array(
				'show_in_rest' => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array(
							'type' => 'number',
						),
					),
				),
				'single'       => true,
				'type'         => 'array',
			)
		);
	}
);

/**
 * Sync byline post meta to taxonomy terms when meta is added, updated or deleted.
 */
function handle_post_meta_saved( $meta_id, $post_id, $meta_key, $meta_value ) {
	if ( BYLINES_META_KEY !== $meta_key ) {
		return;
	}

	$meta_value = current_filter() === 'deleted_post_meta' ? null : $meta_value;
	$term_ids   = wp_parse_id_list( $meta_value );

	// Avoid infinite loops when saving terms
	remove_filter( 'set_object_terms', '\Ups\Blocks\handle_set_object_terms', 10, 4 );

	wp_set_post_terms( $post_id, $term_ids, AUTHOR_TAXONOMY_NAME );

	add_filter( 'set_object_terms', '\Ups\Blocks\handle_set_object_terms', 10, 4 );
}

function add_post_meta_saved_actions() {
	add_action( 'added_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
	add_action( 'updated_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
	add_action( 'deleted_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
}

function remove_post_meta_saved_actions() {
	remove_action( 'added_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
	remove_action( 'updated_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
	remove_action( 'deleted_post_meta', '\Ups\Blocks\handle_post_meta_saved', 10, 4 );
}

add_post_meta_saved_actions();

/**
 * Sync byline taxonomy terms to post meta when term relationships are set.
 *
 * Use cases:
 * - Quick Edit
 * - Bulk Edit
 * - Anywhere a byline term is saved outside of the post editor context.
 */
function handle_set_object_terms( $object_id, $terms, $tt_ids, $taxonomy ) {
	if ( $taxonomy !== AUTHOR_TAXONOMY_NAME ) {
		return;
	}

	// Avoid infinite loops when saving post meta
	remove_post_meta_saved_actions();

	if ( empty( $tt_ids ) ) {
		delete_post_meta( $object_id, BYLINES_META_KEY );
	} else {
		update_post_meta( $object_id, BYLINES_META_KEY, $tt_ids );
	}

	add_post_meta_saved_actions();
}

add_action( 'set_object_terms', '\Ups\Blocks\handle_set_object_terms', 10, 4 );


/**
 * Override the default author display value for a post.
 *
 * @param string $display_name Author's display name.
 *
 * @return string
 */
function handle_display_author( $display_name ) {
	if ( 'post' === get_post_type() ) {
		$post    = get_post();
		$bylines = \Ups\Blocks\get_post_bylines( $post, 'name' );
		return implode( ', ', $bylines );
	}
	return $display_name;
}
add_filter( 'the_author', '\Ups\Blocks\handle_display_author', 10, 1 );

/**
 * Helper function for themes to retrieve byline authors for a given post.
 *
 * @param WP_Post|int $post  Optional post to retrieve authors for. Leave blank to
 *                           use the current global post.
 * @param string      $field The field to return for each author. This can be any
 *                           property from a WP_Term.
 *
 * @return array List of author terms.
 */
function get_post_bylines( $post = null, $field = null ) {
	$post = get_post( $post );
	if ( ! $post ) {
		return;
	}

	$authors    = array();
	$author_ids = get_post_meta( $post->ID, BYLINES_META_KEY, true );
	if ( is_array( $author_ids ) && count( $author_ids ) > 0 ) {
		$authors = get_terms(
			array(
				'taxonomy'   => AUTHOR_TAXONOMY_NAME,
				'object_ids' => $post->ID,
				'include'    => $author_ids,
				'orderby'    => 'include',
			)
		);
	}

	if ( $field ) {
		$flat_authors = array();
		foreach ( $authors as $author_term ) {
			$flat_authors[] = $author_term->{$field};
		}

		return $flat_authors;
	}

	return $authors;
}

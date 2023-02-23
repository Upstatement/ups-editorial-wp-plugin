<?php
/**
 * Registers the Author taxonomy and enable the Author panel in the editor. The Author panel is exposed via the
 * `author-panel` plugin defined in the JavaScript directory (`/src`).
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial\Taxonomy;

use function Upstatement\Editorial\get_post_authors;

class Author {
	/**
	 * The name of the taxonomy.
	 *
	 * @var string
	 */
	const NAME = 'ups_authors';

	/**
	 * Key for the meta value that holds the list of authors.
	 *
	 * @var string
	 */
	const AUTHOR_META_KEY = 'ups_meta__authors';

	/**
	 * Register.
	 *
	 * @return void
	 */
	public static function register() {
		$author = new self();

		add_action( 'init', array( $author, 'register_taxonomy' ) );
		add_action( 'init', array( $author, 'register_post_meta' ) );

		add_action( 'set_object_terms', array( $author, 'handle_set_object_terms' ), 10, 4 );
		$author->add_post_meta_saved_actions();

		add_filter( 'the_author', array( $author, 'handle_display_author' ), 10, 1 );

		// Kill author rewrite rules for our taxonomy to supersede.
		add_filter( 'author_rewrite_rules', fn() => array() );
	}

	/**
	 * Registers the taxonomy.
	 *
	 * @return void
	 */
	public function register_taxonomy() {
		$authors_labels = array(
			'name'                       => _x( 'Authors', 'Taxonomy General Name', 'ups_editorial' ),
			'singular_name'              => _x( 'Author', 'Taxonomy Singular Name', 'ups_editorial' ),
			'menu_name'                  => __( 'Authors', 'ups_editorial' ),
			'all_items'                  => __( 'All Authors', 'ups_editorial' ),
			'parent_item'                => __( 'Parent Author', 'ups_editorial' ),
			'parent_item_colon'          => __( 'Parent Author:', 'ups_editorial' ),
			'new_item_name'              => __( 'New Author Name', 'ups_editorial' ),
			'add_new_item'               => __( 'Add New Author', 'ups_editorial' ),
			'edit_item'                  => __( 'Edit Author', 'ups_editorial' ),
			'update_item'                => __( 'Update Author', 'ups_editorial' ),
			'view_item'                  => __( 'View Author', 'ups_editorial' ),
			'separate_items_with_commas' => __( 'Separate authors with commas', 'ups_editorial' ),
			'add_or_remove_items'        => __( 'Add or remove authors', 'ups_editorial' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'ups_editorial' ),
			'popular_items'              => __( 'Popular Authors', 'ups_editorial' ),
			'search_items'               => __( 'Search Authors', 'ups_editorial' ),
			'not_found'                  => __( 'Not Found', 'ups_editorial' ),
			'no_terms'                   => __( 'No authors', 'ups_editorial' ),
			'items_list'                 => __( 'Authors list', 'ups_editorial' ),
			'items_list_navigation'      => __( 'Authors list navigation', 'ups_editorial' ),
			'back_to_items'              => __( 'Back to Authors', 'ups_editorial' ),
		);

		$authors_args = array(
			'labels'             => $authors_labels,
			'hierarchical'       => false,
			'public'             => true,
			'show_ui'            => true,
			'show_in_rest'       => true,
			'rest_base'          => self::NAME,
			'show_in_quick_edit' => true,
			'meta_box_cb'        => false,
			'show_admin_column'  => true,
			'show_in_nav_menus'  => true,
			'show_in_rest'       => true,
			'show_tagcloud'      => true,
			'query_var'          => self::NAME,
			'rewrite'            => array(
				'slug' => 'author',
			),
		);
		register_taxonomy( self::NAME, array( 'post' ), $authors_args );
	}


	/**
	 * Store a list of author term IDs in post meta to preserve order.
	 *
	 * @return void
	 */
	public function register_post_meta() {
		register_post_meta(
			'post',
			self::AUTHOR_META_KEY,
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

	/**
	 * Sync author post meta to taxonomy terms when meta is added, updated or deleted.
	 *
	 * @see https://developer.wordpress.org/reference/hooks/added_meta_type_meta/
	 *
	 * @param int    $meta_id    The meta ID after successful update.
	 * @param int    $post_id    ID of the object metadata is for.
	 * @param string $meta_key   Metadata key.
	 * @param mixed  $meta_value Metadata value. Serialized if non-scalar.
	 *
	 * @return void
	 */
	public function handle_post_meta_saved( $meta_id, $post_id, $meta_key, $meta_value ) {
		if ( self::AUTHOR_META_KEY !== $meta_key ) {
			return;
		}

		$meta_value = current_filter() === 'deleted_post_meta' ? null : $meta_value;
		$term_ids   = wp_parse_id_list( $meta_value );

		// Avoid infinite loops when saving terms.
		remove_filter( 'set_object_terms', array( $this, 'handle_set_object_terms' ), 10 );

		wp_set_post_terms( $post_id, $term_ids, self::NAME );

		add_filter( 'set_object_terms', array( $this, 'handle_set_object_terms' ), 10, 4 );
	}

	/**
	 * Sync author taxonomy terms to post meta when term relationships are set.
	 *
	 * @see https://developer.wordpress.org/reference/hooks/set_object_terms/
	 *
	 * Use cases:
	 * - Quick Edit
	 * - Bulk Edit
	 * - Anywhere a author term is saved outside of the post editor context.
	 *
	 * @param int    $object_id  Object ID.
	 * @param array  $terms      An array of object terms.
	 * @param array  $tt_ids     An array of term taxonomy IDs.
	 * @param string $taxonomy   Taxonomy slug.
	 * @return void
	 */
	public function handle_set_object_terms( $object_id, $terms, $tt_ids, $taxonomy ) {
		if ( self::NAME !== $taxonomy ) {
			return;
		}

		// Avoid infinite loops when saving post meta.
		$this->remove_post_meta_saved_actions();

		if ( empty( $tt_ids ) ) {
			delete_post_meta( $object_id, self::AUTHOR_META_KEY );
		} else {
			update_post_meta( $object_id, self::AUTHOR_META_KEY, $tt_ids );
		}

		$this->add_post_meta_saved_actions();
	}

	/**
	 * Override the default author display value for a post.
	 *
	 * @param string $display_name Author's display name.
	 *
	 * @return string
	 */
	public function handle_display_author( $display_name ) {
		if ( 'post' === get_post_type() ) {
			$post    = get_post();
			$authors = get_post_authors( $post, 'name' );
			if ( $authors ) {
				return implode( ', ', $authors );
			}
		}

		return $display_name;
	}

	/**
	 * Register callbacks for all post meta actions.
	 *
	 * @return void
	 */
	private function add_post_meta_saved_actions() {
		add_action( 'added_post_meta', array( $this, 'handle_post_meta_saved' ), 10, 4 );
		add_action( 'updated_post_meta', array( $this, 'handle_post_meta_saved' ), 10, 4 );
		add_action( 'deleted_post_meta', array( $this, 'handle_post_meta_saved' ), 10, 4 );
	}

	/**
	 * Unregister callbacks for all post meta actions.
	 *
	 * @return void
	 */
	private function remove_post_meta_saved_actions() {
		remove_action( 'added_post_meta', array( $this, 'handle_post_meta_saved' ), 10 );
		remove_action( 'updated_post_meta', array( $this, 'handle_post_meta_saved' ), 10 );
		remove_action( 'deleted_post_meta', array( $this, 'handle_post_meta_saved' ), 10 );
	}
}

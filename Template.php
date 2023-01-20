<?php
/**
 * Global functions that can be used in templates.
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial;

/**
 * Helper function for themes to retrieve byline authors for a given post.
 *
 * @param WP_Post|int $post  Optional post to retrieve authors for. Leave blank to use the current global post.
 * @param string      $field The field to return for each author. This can be any property from a WP_Term.
 *
 * @return array<WP_Term>|null List of author terms.
 */
function get_post_bylines( $post = null, $field = null ) {
	$post = get_post( $post );
	if ( ! $post ) {
		return null;
	}

	$authors    = array();
	$author_ids = get_post_meta( $post->ID, 'bylines', true );

	if ( is_array( $author_ids ) && count( $author_ids ) > 0 ) {
		$authors = get_terms(
			array(
				'taxonomy'   => Taxonomy\Author::NAME,
				'object_ids' => $post->ID,
				'include'    => $author_ids,
				'orderby'    => 'include',
			)
		);

		if ( ! is_array( $authors ) ) {
			return null;
		}
	}

	if ( $field ) {
		return wp_list_pluck( $authors, $field );
	}

	return $authors;
}
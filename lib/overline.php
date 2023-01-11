<?php
/**
 * Server side logic for overlines.
 */

namespace Ups\Blocks;

/** Post meta key name for storing overline */
const OVERLINE_META_KEY = 'topper_overline';

/**
 * Helper function for themes to retrieve overline category a given post.
 *
 * @param \WP_Post|int $post Post to retrieve authors for. Optional. Leave blank to use the current global post.
 * @return \WP_Term|null Category used as overline
 */
function get_post_overline( $post = null ) {
	$post = get_post( $post );
	if ( ! $post ) {
		return null;
	}

	$category_id = get_post_meta( $post->ID, OVERLINE_META_KEY, true );
	if ( ! $category_id ) {
		return null;
	}

	$category = get_category( $category_id );
	if ( ! $category instanceof \WP_Term ) {
		return null;
	}

	return $category;
}

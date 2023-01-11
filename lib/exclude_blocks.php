<?php
/**
 * Allows for excluding blocks from the editor.
 */

namespace Ups\Blocks;

use Ds\Set;

/* Custom blocks added by plugin. */
const CUSTOM_BLOCKS = array(
	// Ups blocks
	'ups/image',
	'ups/sample-block',
);

/* All core blocks included with Gutenberg. */
const CORE_BLOCKS = array(
	// Common
	'core/heading',
	'core/paragraph',
	'core/image',
	'core/gallery',
	'core/video',
	'core/quote',
	'core/cover',
	'core/list',
	'core/audio',
	'core/file',
	// Formatting
	'core/html',
	'core/pullquote',
	'core/code',
	'core/freeform',
	'core/preformatted',
	'core/table',
	'core/verse',
	// Layout
	'core/nextpage',
	'core/buttons',
	'core/columns',
	'core/column',
	'core/group',
	'core/media-text',
	'core/more',
	'core/separator',
	'core/spacer',
	// Widgets
	'core/shortcode',
	'core/archives',
	'core/calendar',
	'core/categories',
	'core/latest-comments',
	'core/latest-posts',
	'core/rss',
	'core/search',
	'core/social-links',
	'core/tag-cloud',
	// Embeds
	'core/embed',
	'core-embed/twitter',
	'core-embed/youtube',
	'core-embed/facebook',
	'core-embed/instagram',
	'core-embed/wordpress',
	'core-embed/soundcloud',
	'core-embed/spotify',
	'core-embed/flickr',
	'core-embed/vimeo',
	'core-embed/animoto',
	'core-embed/cloudup',
	'core-embed/crowdsignal',
	'core-embed/dailymotion',
	'core-embed/hulu',
	'core-embed/imgur',
	'core-embed/issuu',
	'core-embed/kickstarter',
	'core-embed/meetup-com',
	'core-embed/mixcloud',
	'core-embed/reddit',
	'core-embed/reverbnation',
	'core-embed/screencast',
	'core-embed/scribd',
	'core-embed/slideshare',
	'core-embed/smugmug',
	'core-embed/speaker-deck',
	'core-embed/tiktok',
	'core-embed/ted',
	'core-embed/tumblr',
	'core-embed/videopress',
	'core-embed/wordpress-tv',
	'core-embed/amazon-kindle',
);

/**
 * Variations of the embed block are excluded
 * in src/blocks/admin.js with the Variations API.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
const GLOBAL_EXCLUDE_LIST = array(
	// Common
	'core/image', // <-- Replaced by `ups/image`
	'core/gallery', // <-- Replaced by `acf/imagelayout`
	'core/audio',
	// Formatting
	'core/freeform',
	'core/preformatted',
	'core/verse',
	// Layout
	'core/nextpage',
	'core/columns',
	'core/media-text',
	'core/more',
	'core/spacer',
	'core/group',
	// Widgets
	'core/archives',
	'core/calendar',
	'core/latest-comments',
	'core/latest-posts',
	'core/rss',
	'core/search',
	'core/social-links',
	'core/tag-cloud',
);

/**
 * Gets the list of allowed blocks, excluding the blocks within the exclude list.
 *
 * @param array $exclude_list the blocks to exclude from the selector
 *
 * @return array the allowed blocks for the selector
 */
function get_blocks_with_exclude_list( $exclude_list = array() ) {
	$exclude_list_set = new Set( array_merge( GLOBAL_EXCLUDE_LIST, $exclude_list ) );
	$allow_list       = CUSTOM_BLOCKS;
	$allow_list       = apply_filters( 'add_blocks_to_allow_list', $allow_list );
	foreach ( CORE_BLOCKS as $block ) {
		if ( ! ( $exclude_list_set->contains( $block ) ) ) {
			array_push( $allow_list, $block );
		}
	}
	return $allow_list;
}

/**
 * Applies a block exclusion filter to the given post type.
 *
 * @param boolean                  $allowed_block_types the allowed block types (by default is `true` for all blocks)
 * @param \WP_Block_Editor_Context $block_editor_context the current block editor context
 *
 * @return array an array of allowed blocks, or true to allow all blocks
 */
function exclude_blocks( $allowed_block_types, $block_editor_context ) {
	// We can use $post->post_type to vary exclusion list per post type
	// if ($post->post_type == 'page') { /* ... */ }
	return get_blocks_with_exclude_list();
}

<?php
/*
Plugin Name: Upstatement Blocks
Description: Gutenberg blocks library for Upstatement projects
Version: 0.1.0
*/

/** Autoloader */
require_once 'vendor/autoload.php';

/** Load custom attachment field functionality */
require __DIR__ . '/lib/add_attachment_field.php';
use function Ups\Blocks\add_attachment_field;

/** Load block exclusion functionality */
require __DIR__ . '/lib/exclude_blocks.php';

/** Load byline-related functionality */
require __DIR__ . '/lib/bylines.php';

/** Load overline-related functionality */
require __DIR__ . '/lib/overline.php';

/**
 * Enqueue editor scripts and styles
 */
add_action('enqueue_block_editor_assets', function () {
    $blocks_asset = include __DIR__ . '/build/blocks.asset.php';
    wp_enqueue_script(
        'ups-blocks',
        plugins_url('/build/blocks.js', __FILE__),
        $blocks_asset['dependencies'],
        $blocks_asset['version'],
    );
    $editor_asset = include __DIR__ . '/build/editor.asset.php';
    wp_enqueue_style(
        'ups-blocks',
        plugins_url('/build/editor.css', __FILE__),
        ['wp-components'],
        $editor_asset['version']
    );

    $plugins_asset = include __DIR__ . '/build/plugins.asset.php';
    wp_enqueue_script(
        'ups-plugins',
        plugins_url('/build/plugins.js', __FILE__),
        $plugins_asset['dependencies'],
        $plugins_asset['version'],
    );
    wp_enqueue_style(
        'ups-plugins',
        plugins_url('/build/plugins.css', __FILE__),
        ['wp-components'],
        $plugins_asset['version']
    );
});

/**
 * Enqueue front-end scripts and styles.
 */
add_action('wp_enqueue_scripts', function() {
    $style_asset = include __DIR__ . '/build/style.asset.php';
    wp_enqueue_style(
        'ups-blocks',
        plugins_url('/build/style.css', __FILE__),
        [],
        $style_asset['version']
    );
});

/**
 * Define custom "Upstatement" category for the Gutenberg block library.
 */
add_filter('block_categories', function($categories, $post) {
    return array_merge(
        $categories,
        [
            [
                'slug' => 'upstatement',
                'title' => __('Upstatement', 'ups-blocks'),
                'icon'  => 'wordpress',
            ],
        ]
    );
}, 10, 2);

/**
 * Hide core blocks by default from the selector. This is a mediation for the `unregisterBlockType`
 * function, which is currently broken.
 *
 * @see https://github.com/WordPress/gutenberg/pull/12613#discussion_r241691681
 */
if (function_exists('Ups\Blocks\exclude_blocks')) {
    add_filter('allowed_block_types', 'Ups\Blocks\exclude_blocks', 10, 2);
}

/**
 * Ensure post meta used by our blocks are exposed via WP REST API.
 */
add_action('init', function () {
    register_post_meta('post', 'is_light_nav', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean'
    ]);

    register_post_meta('post', 'topper_type', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ]);

    register_post_meta('post', 'topper_overline', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'number'
    ]);

    register_post_meta('post', 'topper_description', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ]);

    register_post_meta('post', 'topper_image', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'number'
    ]);

    register_post_meta('post', 'topper_hide_in_modal_gallery', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'boolean'
    ]);

    register_post_meta('post', 'topper_caption', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string'
    ]);

    register_post_meta('post', 'topper_video_poster', [
        'show_in_rest' => true,
        'single' => true,
        'type' => 'number'
    ]);
});

if (function_exists('Ups\Blocks\add_attachment_field')) {
    $attachment_fields = [
        [
            'id' => 'credit',
            'label' => 'Credit',
            'input' => 'text',
            'helps' => 'Provide credit to the creator',
            'single' => true
        ]
    ];

    /**
     * Register all attachment fields.
     */
    foreach ($attachment_fields as $field) {
        add_attachment_field($field['id'], $field['label'], $field['input'], $field['helps']);
    }

    /**
     * Adds custom attachment fields to the Rest API.
     */
    add_action('rest_api_init', function() use ($attachment_fields) {
        foreach ($attachment_fields as $field) {
            register_rest_field('attachment', $field['id'], [
                'get_callback' => function($object) use ($field) {
                    return get_post_meta($object['id'], $field['id'], $field['single']);
                },
                'update_callback' => null,
                'schema' => null,
            ]);
        }
    });
}

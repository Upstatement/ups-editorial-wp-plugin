<?php
/**
 * Manage assets for the plugin.
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial;

class Assets {
	/**
	 * Registers the assets to load via hooks.
	 *
	 * @return void
	 */
	public static function register() {
		$assets = new self();

		add_action( 'enqueue_block_editor_assets', array( $assets, 'enqueue_for_block_editor' ) );
	}

	/**
	 * Enqueue assets for the block editor.
	 *
	 * @return void
	 */
	public function enqueue_for_block_editor() {
		$blocks_asset = include UPS_EDITORIAL_PLUGIN_DIR . '/build/index.asset.php';

		wp_enqueue_script(
			'upstatement-editorial-js',
			plugins_url( '/build/index.js', UPS_EDITORIAL_PLUGIN_FILE ),
			$blocks_asset['dependencies'],
			$blocks_asset['version'],
			true
		);

		wp_enqueue_style(
			'upstatement-editorial-style',
			plugins_url( '/build/index.css', UPS_EDITORIAL_PLUGIN_FILE ),
			array( 'wp-components' ),
			$blocks_asset['version']
		);
	}
}

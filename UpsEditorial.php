<?php
/**
 * Plugin Name: Upstatement Editorial
 * Description: Enhance the WordPress editorial experience.
 * Version: 2.0.0
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial;

/** Autoloader */
require_once 'vendor/autoload.php';

define( 'UPS_EDITORIAL_PLUGIN_DIR', __DIR__ );
define( 'UPS_EDITORIAL_PLUGIN_FILE', __FILE__ );

/**
 * Plugin entrypoint.
 */
class UpsEditorial {

	/**
	 * Register the plugin.
	 *
	 * @return void
	 */
	public static function register() {
		$plugin = new self();

		Assets::register();
	}

}

UpsEditorial::register();

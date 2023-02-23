<?php
/**
 * Plugin Name: Upstatement Editorial
 * Description: Enhance the WordPress editorial experience.
 * Version: 1.0.0
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial;

define( 'UPS_EDITORIAL_PLUGIN_DIR', __DIR__ );
define( 'UPS_EDITORIAL_PLUGIN_FILE', __FILE__ );

/** Autoloader */
require_once 'vendor/autoload.php';

/** Include template functions. */
require_once 'Template.php';

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
		Config::read();
		Assets::register();

		if ( Config::get( 'author_panel' ) ) {
			Taxonomy\Author::register();
		}

		if ( Config::get( 'article_topper_panel' ) ) {
			Meta\ArticleTopper::register();
		}

		if ( Config::get( 'attachment_credit' ) ) {
			Meta\AttachmentCredit::register();
		}
	}
}

UpsEditorial::register();

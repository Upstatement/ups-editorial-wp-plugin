<?php
/**
 * Handle configuration.
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial;

class Config {
	/**
	 * Default configuration options.
	 *
	 * @var array
	 */
	private static array $defaults = array(
		// Enable the author controls, including registering the `Authors` taxonomy.
		'author_panel'         => true,

		// Enable the article topper fields.
		'article_topper_panel' => true,

		// Enable the credit field for attachments.
		'attachment_credit'    => true,

		// Enable the extended blocks.
		'extended_blocks'      => array(
			'cover',
			'file',
			'gallery',
			'image-layout',
			'related-articles',
			'table',
			'video',
		),
	);

	/**
	 * Final configuration options for the plugin, after accounting for those defined in the theme and the defaults.
	 *
	 * @var array
	 */
	private static $options = array();

	/**
	 * Read in config options and handle them.
	 *
	 * @return void
	 */
	public static function read() {
		$config_file = trailingslashit( get_stylesheet_directory() ) . 'ups-editorial.php';

		if ( file_exists( $config_file ) ) {
			$config        = require_once $config_file;
			self::$options = wp_parse_args( $config, self::$defaults );
		} else {
			self::$options = self::$defaults;
		}
	}

	/**
	 * Gets a configuration value.
	 *
	 * @param string $key Option name to retrieve.
	 *
	 * @return mixed|null
	 */
	public static function get( $key ) {
		return self::$options[ $key ] ?? null;
	}

	/**
	 * Gets all configuration values.
	 *
	 * @return array
	 */
	public static function get_all() {
		return self::$options;
	}
}

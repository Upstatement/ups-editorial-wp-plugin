<?php
/**
 * Registers meta fields for the article topper. Controls for these fields are exposed via the `article-topper-panel`
 * plugin defined in the JavaScript directory (`/src`).
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial\Meta;

class ArticleTopper {

	/**
	 * Field configuration.
	 *
	 * @var array
	 */
	private $fields = array(
		'is_light_nav'                 => array( 'type' => 'boolean' ),
		'topper_type'                  => null,
		'topper_overline'              => array( 'type' => 'number' ),
		'topper_description'           => null,
		'topper_caption'               => null,
		'topper_image'                 => array( 'type' => 'number' ),
		'topper_video_poster'          => array( 'type' => 'number' ),
		'topper_hide_in_modal_gallery' => array( 'type' => 'boolean' ),
	);

	/**
	 * Register the article topper feature.
	 *
	 * @return void
	 */
	public static function register() {
		$article_topper = new self();
		add_action( 'init', array( $article_topper, 'register_fields' ) );
	}

	/**
	 * Registers the fields for the article topper.
	 *
	 * @return void
	 */
	public function register_fields() {
		foreach ( $this->fields as $key => $field_args ) {
			$defaults = array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			);

			register_post_meta( 'post', $key, wp_parse_args( $field_args, $defaults ) );
		}
	}
}

<?php
/**
 * Registers a meta field for attachment credits.
 *
 * @package Upstatement\Editorial
 */

namespace Upstatement\Editorial\Meta;

use WP_Post;

class AttachmentCredit {

	/**
	 * Fields to add to the attachment post type.
	 *
	 * @var array
	 */
	private $attachment_fields = array(
		array(
			'id' => 'credit',
			'label' => 'Credit',
			'input' => 'text',
			'helps' => 'Provide credit to the creator',
			'single' => true,
		)
	);

	/**
	 * Register the credit feature.
	 *
	 * @return void
	 */
	public static function register() {
		$attachment_credit = new self();

		add_filter( 'attachment_fields_to_edit', array( $attachment_credit, 'register_edit_fields' ), 10, 2 );
		add_filter( 'attachment_fields_to_save', array( $attachment_credit, 'handle_save_fields'), 10, 2 );

		add_action( 'rest_api_init', array( $attachment_credit, 'register_rest_fields' ) );
	}

	/**
	 * Register the attachment fields for editing.
	 *
	 * @see https://developer.wordpress.org/reference/hooks/attachment_fields_to_edit/
	 *
	 * @param array   $fields Array of attachment form fields.
	 * @param WP_Post $post   Attachment object.
	 *
	 * @return array
	 */
	public function register_edit_fields( $fields, $post ) {
		foreach ( $this->attachment_fields as $field ) {
			$fid            = $field['id'];
			$value          = get_post_meta( $post->ID, $fid, true );
			$fields[ $fid ] = array(
				'show_in_rest' => true,
				'label'        => $field['label'],
				'input'        => $field['input'],
				'value'        => $value,
				'helps'        => $field['helps'],
			);
		}

		return $fields;
	}

	/**
	 * Handles saved attachment data.
	 *
	 * @param array $post       Array of post data.
	 * @param array $attachment Attachment metadata.
	 *
	 * @return void
	 */
	public function handle_save_fields( $post, $attachment ) {
		foreach ( $this->attachment_fields as $field ) {
			$fid = $field['id'];
			if ( isset( $attachment[ $fid ] ) ) {
				update_post_meta( $post['ID'], $fid, sanitize_text_field( $attachment[ $fid ] ) );
			} else {
				delete_post_meta( $post['ID'], $fid );
			}
		}

		return $post;
	}

	/**
	 * Add the attachment fields for the Rest API.
	 *
	 * @return void
	 */
	public function register_rest_fields() {
		foreach ($this->attachment_fields as $field) {
			register_rest_field(
				'attachment',
				$field['id'],
				array(
					'get_callback'    => function($object) use ($field) {
						return get_post_meta( $object['id'], $field['id'], $field['single'] );
					},
					'update_callback' => null,
					'schema'          => null,
				)
			);
		}
	}
}

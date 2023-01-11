<?php
/**
 * Adding custom fields to attachments.
 */

namespace Ups\Blocks;

/**
 * Helper function for adding new custom fields to the `attachment` post type.
 *
 * @param string $id a unique field name identifier
 * @param string $label a human-readable label for the field
 * @param string $input the input type to use for the field
 * @param string $helps optional helper text
 * @return void
 */
function add_attachment_field( $id, $label, $input, $helps = '' ) {
	/**
	* Adds the field to the available form fields for attachments.
	*/
	add_filter(
		'attachment_fields_to_edit',
		function( $form_fields, $post ) use ( $id, $label, $input, $helps ) {
			$value              = get_post_meta( $post->ID, $id, true );
			$form_fields[ $id ] = array(
				'show_in_rest' => true,
				'label'        => $label,
				'input'        => $input,
				'value'        => $value,
				'helps'        => $helps,
			);
			return $form_fields;
		},
		10,
		2
	);

	/**
	* Updates the post saving mechanism to save the custom field data.
	*/
	add_filter(
		'attachment_fields_to_save',
		function( $post, $attachment ) use ( $id ) {
			if ( isset( $attachment[ $id ] ) ) {
				update_post_meta( $post['ID'], $id, sanitize_text_field( $attachment[ $id ] ) );
			} else {
				delete_post_meta( $post['ID'], $id );
			}
		},
		10,
		2
	);
}

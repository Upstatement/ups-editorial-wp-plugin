import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Extend core gallery block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/gallery-settings',

  callback: function(settings, name) {
    if (name !== 'core/gallery') {
      return settings;
    }

    const updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full'],
      }),
    });

    return updatedSettings;
  },
};

/**
 * Extend core gallery block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
const blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/gallery-edit',

  callback: createHigherOrderComponent(
    BlockEdit => props => {
      const { name, setAttributes } = props;

      // Do nothing if it's another block than the gallery.
      if (name !== 'core/gallery') {
        return <BlockEdit {...props} />;
      }

      // Set the number of columns to always be 2 so we can hide the column slider
      setAttributes({ columns: 2 });

      // Add a div above the Gallery settings panel
      // so we can target the BlockEdit component with CSS
      return (
        <Fragment>
          <InspectorControls>
            <div className="block-editor-gallery"></div>
          </InspectorControls>

          <BlockEdit {...props} />
        </Fragment>
      );
    },
    'withInspectorControl',
  ),
};

const hooks = [registerBlockTypeHook, blockEditHook];

export default hooks;

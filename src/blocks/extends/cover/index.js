import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Extend core cover block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/cover-settings',

  callback(settings, name) {
    if (name !== 'core/cover') {
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
 * Extend core cover block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
const blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/cover-edit',

  callback: createHigherOrderComponent(
    BlockEdit => props => {
      const { name } = props;

      // Do nothing if it's another block than the cover.
      if (name !== 'core/cover') {
        return <BlockEdit {...props} />;
      }

      // Add a div above the Cover settings panel
      // so we can target the BlockEdit component with CSS
      return (
        <Fragment>
          <InspectorControls>
            <div className="block-editor-cover"></div>
          </InspectorControls>

          <BlockEdit {...props} />
        </Fragment>
      );
    },
    'withInspectorControl',
  ),
};

export const hooks = [registerBlockTypeHook, blockEditHook];

export const name = 'cover';

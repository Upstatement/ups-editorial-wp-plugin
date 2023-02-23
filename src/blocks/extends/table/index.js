import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import getSaveElement from './save';

/**
 * Extend core table block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/table-settings',

  callback(settings, name) {
    if (name !== 'core/table') {
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
 * Extend core table block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
const blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/table-edit',

  callback: createHigherOrderComponent(
    BlockEdit => props => {
      const { name } = props;

      // Do nothing if it's another block than the table.
      if (name !== 'core/table') {
        return <BlockEdit {...props} />;
      }

      // Add a div above the Table settings panel
      // so we can target the BlockEdit component with CSS
      return (
        <Fragment>
          <InspectorControls>
            <div className="block-editor-table"></div>
          </InspectorControls>

          <BlockEdit {...props} />
        </Fragment>
      );
    },
    'withInspectorControl',
  ),
};

/**
 * Extend core table block save component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-getsaveelement
 */
const blockEditSave = {
  hookName: 'blocks.getSaveElement',
  namespace: 'ups/extend/table-save',

  callback: (element, blockType, attributes) => {
    if (!element) {
      return null;
    } else if (blockType.name !== 'core/table') {
      return element;
    }
    return getSaveElement(element, blockType, attributes);
  },
};

export const hooks = [registerBlockTypeHook, blockEditHook, blockEditSave];

export const name = 'table';

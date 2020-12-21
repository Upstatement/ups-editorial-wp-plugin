import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Extend core button block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
const blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/button-edit',

  callback: createHigherOrderComponent(
    BlockEdit => props => {
      const { name } = props;

      // Do nothing if it's another block than the button.
      if (name !== 'core/button') {
        return <BlockEdit {...props} />;
      }

      // Add a div above the button settings panel
      // so we can target the BlockEdit component with CSS
      return (
        <Fragment>
          <InspectorControls>
            <div className="block-editor-button"></div>
          </InspectorControls>

          <BlockEdit {...props} />
        </Fragment>
      );
    },
    'withInspectorControl',
  ),
};

const hooks = [blockEditHook];

export default hooks;

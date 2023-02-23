import { createHigherOrderComponent } from '@wordpress/compose';

/**
 * Extend core gallery block edit component
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
 */
const blockEditHook = {
  hookName: 'editor.BlockEdit',
  namespace: 'ups/extend/video-edit',

  callback: createHigherOrderComponent(
    BlockEdit => props => {
      const { name, attributes, setAttributes } = props;

      if (name === 'core/video') {
        // Set the default video settings (hide controls & autoplay on loop)

        // WordPress has no inherent way to set defaults, and this function
        // runs every time the block changes, so we only set the attributes
        // if they are Undefined (read: not already set).

        if (attributes.autoplay === undefined) {
          setAttributes({ autoplay: true });
        }
        // Controls is enabled by default, so instead we check the existence of
        // one of the other settings.
        if (attributes.loop === undefined) {
          setAttributes({ loop: true });
          setAttributes({ controls: false });
        }
        if (attributes.muted === undefined) {
          setAttributes({ muted: true });
        }
        if (attributes.playsInline === undefined) {
          setAttributes({ playsInline: true });
        }
      }

      return <BlockEdit {...props} />;
    },
    'withAttributesOverride',
  ),
};

export const hooks = [blockEditHook];

export const name = 'video';

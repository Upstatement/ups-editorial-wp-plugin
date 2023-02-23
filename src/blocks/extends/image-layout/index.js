/**
 * Extend acf image layout block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/image-layout-settings',

  callback(settings, name) {
    if (name !== 'acf/imagelayout') {
      return settings;
    }

    const updatedSettings = Object.assign({}, settings, {
      attributes: Object.assign({}, settings.attributes, {
        align: Object.assign({}, settings.attributes.align, {
          default: 'wide',
        }),
      }),
      supports: Object.assign({}, settings.supports, {
        // Only allow center, wide, and full alignment options
        align: ['center', 'wide', 'full'],
      }),
    });

    return updatedSettings;
  },
};

export const hooks = [registerBlockTypeHook];

export const name = 'image-layout';

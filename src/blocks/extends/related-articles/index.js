/**
 * Extend acf related articles block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/related-articles-settings',

  callback: function(settings, name) {
    if (name !== 'acf/relatedarticles') {
      return settings;
    }

    const updatedSettings = Object.assign({}, settings, {
      attributes: Object.assign({}, settings.attributes, {
        align: Object.assign({}, settings.attributes.align, {
          default: 'center',
        }),
      }),
      supports: Object.assign({}, settings.supports, {
        // Only allow center, left, and right alignment options
        align: ['center', 'left', 'right'],
      }),
    });

    return updatedSettings;
  },
};

const hooks = [registerBlockTypeHook];

export default hooks;

/**
 * Extend core file block settings
 *
 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype
 */
const registerBlockTypeHook = {
  hookName: 'blocks.registerBlockType',
  namespace: 'ups/extend/file-settings',

  callback(settings, name) {
    if (name !== 'core/file') {
      return settings;
    }

    const updatedSettings = Object.assign({}, settings, {
      supports: Object.assign({}, settings.supports, {
        // Only allow center, left, and right alignment options
        align: ['center', 'left', 'right'],
      }),
    });

    return updatedSettings;
  },
};

export const hooks = [registerBlockTypeHook];

export const name = 'file';

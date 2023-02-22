import { registerPlugin } from '@wordpress/plugins';
import {
  unregisterBlockStyle,
  unregisterBlockVariation,
  getBlockVariations,
} from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';
import { unregisterFormatType, registerFormatType } from '@wordpress/rich-text';

import './editor.scss';

// ========================
// Plugins

import { ArticleTopperPanel, AuthorsPanel } from './plugins';

[ArticleTopperPanel, AuthorsPanel]
  .filter(({ enabled }) => enabled)
  .forEach(({ name, render, icon }) => {
    registerPlugin(name, {
      icon,
      render,
    });
  });

// ========================
// Blocks

import { Cover, File, Gallery, ImageLayout, RelatedArticles, Table, Video } from './blocks/extends';

/**
 * Extend existing Gutenberg blocks using block filters
 *
 * @see https://www.npmjs.com/package/@wordpress/hooks
 */
[Cover, File, Gallery, ImageLayout, RelatedArticles, Table, Video]
  .filter(({ name }) => {
    const activeExtends = window.ups_editorial?.extended_blocks;
    return activeExtends && activeExtends.indexOf(name) > -1;
  })
  .forEach(({ hooks }) => {
    hooks.forEach(({ hookName, namespace, callback }) => {
      addFilter(hookName, namespace, callback);
    });
  });

// ========================
// General editor

domReady(() => {
  /**
   * Unregister all block styles and variations on core blocks by default, with
   * optional overrides provided in configuration. This prevents unnecessary
   * options for content editors and gives designers a blank slate when
   * implementing core blocks.
   *
   * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
   */
  const activeEnableBlockStyles = window.ups_editorial?.enable_block_styles;

  console.log(activeEnableBlockStyles);
  ['button', 'image', 'quote', 'separator', 'table']
    .filter(
      blockName => !activeEnableBlockStyles || activeEnableBlockStyles.indexOf(blockName) === -1,
    )
    .forEach(blockName =>
      wp.blocks
        .getBlockType(`core/${blockName}`)
        .styles.forEach(({ name: styleName }) =>
          unregisterBlockStyle(`core/${blockName}`, styleName),
        ),
    );

  /**
   * Unregister core Embed block variations.
   */
  getBlockVariations('core/embed').forEach(variation => {
    unregisterBlockVariation('core/embed', variation.name);
  });

  /**
   * Add custom class to inline images added to rich text content. This gives
   * theme designers a selector target for inline image styles.
   */
  const image = unregisterFormatType('core/image');
  image.className = 'wp-rich-text-inline-image';
  registerFormatType('core/image', image);
});

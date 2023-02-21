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

/**
 * Unregister block styles and variations on core blocks. This prevents
 * unnecessary options for content editors and gives designers a blank slate
 * when implementing core blocks.
 *
 * @see
 * https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
domReady(() => {
  // Unregister core block styles.
  ['core/image', 'core/quote', 'core/separator', 'core/table'].forEach(blockName => {
    wp.blocks
      .getBlockType(blockName)
      .styles.forEach(({ name: styleName }) => unregisterBlockStyle(blockName, styleName));
  });

  // Unregister core Embed block variations.
  getBlockVariations('core/embed').forEach(variation => {
    unregisterBlockVariation('core/embed', variation.name);
  });
});

/**
 * Add custom class to inline images added to rich text content. This gives
 * theme designers a selector target for inline image styles.
 */
domReady(() => {
  const image = unregisterFormatType('core/image');
  image.className = 'wp-rich-text-inline-image';
  registerFormatType('core/image', image);
});

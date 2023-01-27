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

import { ArticleTopperPanel, BylinesPanel } from './plugins';

[ArticleTopperPanel, BylinesPanel]
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
[Cover, File, Gallery, ImageLayout, RelatedArticles, Table, Video].forEach(hooks => {
  hooks.forEach(({ hookName, namespace, callback }) => {
    addFilter(hookName, namespace, callback);
  });
});

domReady(() => {
  // Remove quote style panel
  unregisterBlockStyle('core/quote', 'default');
  unregisterBlockStyle('core/quote', 'large');

  // Remove pull quote style panel
  unregisterBlockStyle('core/pullquote', 'default');
  unregisterBlockStyle('core/pullquote', 'solid-color');

  // Remove separator style panel
  unregisterBlockStyle('core/separator', 'default');
  unregisterBlockStyle('core/separator', 'wide');
  unregisterBlockStyle('core/separator', 'dots');

  // Remove table style panel
  unregisterBlockStyle('core/table', 'regular');
  unregisterBlockStyle('core/table', 'stripes');

  // Updating format type
  const image = unregisterFormatType('core/image');
  image.className = 'wp-rich-text-inline-image';
  registerFormatType('core/image', image);

  // Unregister all the Embed block variations.
  getBlockVariations('core/embed').forEach(variation => {
    unregisterBlockVariation('core/embed', variation.name);
  });
});

import { registerBlockType, unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';
import { unregisterFormatType, registerFormatType } from '@wordpress/rich-text';

import { Image } from './custom';
import {
  Button,
  Cover,
  File,
  Gallery,
  ImageLayout,
  RelatedArticles,
  Table,
  Video,
} from './extends';

/**
 * Register custom Gutenberg blocks
 *
 * @see https://www.npmjs.com/package/@wordpress/blocks
 */
[Image].forEach(({ name, settings }) => {
  registerBlockType(name, settings);
});

/**
 * Extend existing Gutenberg blocks using block filters
 *
 * @see https://www.npmjs.com/package/@wordpress/hooks
 */
[Button, Cover, File, Gallery, ImageLayout, RelatedArticles, Table, Video].forEach(hooks => {
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

  /**
   * Currently, there is an issue with Gutenberg where unregistering a core block which
   * is in use will break the editor:
   *
   * ```
   * TypeError: Cannot read property 'title' of undefined
   * ```
   *
   * To mediate this, the next best solution is to implement an exclude list for the selector
   * so the selected core blocks can't be used. This will keep existing images, but prevent
   * adding new ones or transformations.
   *
   * Our block exclusion code is available in `lib/exclude_blocks.php` and `index.php`.
   *
   * @see https://github.com/WordPress/gutenberg/pull/12613#discussion_r241691681
   */
});

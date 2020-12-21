/**
 * Entrypoint for custom plugins.
 *
 * @see https://www.npmjs.com/package/@wordpress/plugins
 */
import { registerPlugin } from '@wordpress/plugins';

import * as ArticleTopperPanel from './article-topper-panel';
import * as BylinesPanel from './bylines-panel';

[BylinesPanel, ArticleTopperPanel].forEach(({ name, render, icon }) => {
  registerPlugin(name, {
    icon,
    render,
  });
});

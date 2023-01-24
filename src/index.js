/**
 * Entrypoint for custom plugins.
 *
 * @see https://www.npmjs.com/package/@wordpress/plugins
 */
import { registerPlugin } from '@wordpress/plugins';

import './ups-editorial.scss';

import * as ArticleTopperPanel from './plugins/article-topper-panel';
import * as BylinesPanel from './plugins/bylines-panel';

[ArticleTopperPanel, BylinesPanel]
  .filter(({ enabled }) => enabled)
  .forEach(({ name, render, icon }) => {
    registerPlugin(name, {
      icon,
      render,
    });
  });

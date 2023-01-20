/**
 * Entrypoint for custom plugins.
 *
 * @see https://www.npmjs.com/package/@wordpress/plugins
 */
import { registerPlugin } from '@wordpress/plugins';

import * as BylinesPanel from './plugins/bylines-panel';

[BylinesPanel]
  .filter(({ enabled }) => enabled)
  .forEach(({ name, render, icon }) => {
    registerPlugin(name, {
      icon,
      render,
    });
  });

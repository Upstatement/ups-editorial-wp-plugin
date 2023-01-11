/**
 *
 * Custom webpack config for block styles/scripts.
 * @see https://developer.wordpress.org/block-editor/packages/packages-scripts/
 */
const path = require('path');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  ...defaultConfig,
  entry: {
    blocks: './src/blocks',
    style: './src/blocks/style.scss',
    editor: './src/blocks/editor.scss',
    plugins: ['./src/plugins', './src/plugins/style.scss'],
    admin: './src/blocks/admin',
  },
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              prependData: `@import 'abstracts';`,
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src', 'style')],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      ...defaultConfig.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
    },
  },
};

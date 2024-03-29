# Upstatement Editorial

A WordPress plugin for enhancing the editorial experience, including some common customizations for the [Gutenberg](https://wordpress.org/gutenberg/) editor.

## Table of Contents

- [What This Plugin Does](#what-this-plugin-does)
  - [Blocks](#blocks)
  - [Editor Plugins](#editor-plugins)
  - [Core Enhancements](#core-enhancements)
- [Theme Configuration](#theme-configuration)
- [Theme API](#theme-api)
- [Troubleshooting](#troubleshooting)
- [Local Development](#local-development)
- [Resources](#resources)

## What This Plugin Does

The purpose of this plugin is to tailor the Gutenberg editor experience to be better suited to editors using their WordPress theme and to add functionality common to many websites. Features added as a part of this plugin fall into three categories: block modifications, editor plugins, and core enhancements. This plugin also exposes some global functions that can be used in theme templates.

### Blocks

#### Extended Blocks

The following blocks are extended typically at the registration hook (`blocks.registerBlockType`) to limit the number of available options for an editor. Some blocks also hook into the edit lifecycle (via the `editor.BlockEdit` hook) to add additional classes and structure to the editor markup so as to be able to control certain aspects of the block's settings with css.

- [Cover](./src/blocks/extends/cover/index.js)
- [File](./src/blocks/extends/file/index.js)
- [Gallery](./src/blocks/extends/gallery/index.js)
- [Image Layout](./src/blocks/extends/image-layout/index.js)
- [Related Articles](./src/blocks/extends/related-articles/index.js)
- [Table](./src/blocks/extends/table/index.js)
- [Video](./src/blocks/extends/video/index.js)

> Note that you can continue to extend core block functionality in your theme by using WordPress's [blocks.registerBlockType](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype) and [editor.BlockEdit](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit) filters.

### Editor Plugins

Our main Gutenberg "plugin" adds two panels to the main sidebar of posts: the Article Topper & Authors panels.

#### Article Topper Panel

The article topper panel controls article post metadata concerned with the article topper. This includes:

- `Topper type`: The look and feel of the topper, be it text-only or a site-width featured image
- `Navigation theme`: When paired with dark background image toppers, an already dark-themed nav can appear invisible. This option allows for lighter navigation themes
- `Overline`: Choose a primary category for your article to allow for better recirculation amongst common themes

#### Authors Panel

The Authors panel allows editors to assign multiple authors to the author byline. This process starts with the `Authors` section under `Posts`, where you can create author profiles.

These authors also serve as taxonomies for your articles, so archive pages full of an author's own content are auto-generated on your behalf.

### Core Enhancements

- Adds a `Credit` field to attachment posts.

### Template functions

This plugin exposes a few functions that can be used to retrieve relevant values handled by the plugin. See the [Theme API](#theme-api) section for information about the available functions.

## Theme configuration

By default, all features of this plugin are enabled once the plugin is activated. However, you are able to configure the plugin's functionality (including disabling certain features) via a configuration file that can be added to your theme.

To set up a configuration file, add a `ups-editorial.php` file to your theme's root that returns an array containing the relevant configuration options:

```php
<?php
/**
 * Configuration for the ups-editorial plugin.
 */

return array(
  'author_panel'         => true,
  'article_topper_panel' => true,
  'attachment_credit'    => true,
  'extended_blocks'      => array(
		'cover',
		'file',
		'gallery',
		'image-layout',
		'related-articles',
		'table',
		'video',
	),
  'enable_block_styles'  => array(),
);
```

### Configuration

#### `author_panel`

**Allowed types:** `boolean`

**Default value:** `true`

Enable or disable the plugin's `Author` taxonomy, as well as the Gutenberg editor panel containing the mechanism to add and manage authors for an individual post.

#### `article_topper_panel`

**Allowed types:** `boolean`

**Default value:** `true`

Enable or disable the registration of fields for article toppers and the Gutenberg panel that controls those fields.

#### `attachment_credit`

**Allowed types:** `boolean`

**Default value:** `true`

Enable or disable the registration of a `credit` field for attachments.

#### `extended_blocks`

**Allowed types:** `array`

**Default value:**

```php
array(
  'cover',
  'file',
  'gallery',
  'image-layout',
  'related-articles',
  'table',
  'video',
)
```

A list of blocks that are extended by the plugin. To disable the extension of a certain block, exclude it from this array.

#### `enable_block_styles`

**Allowed types:** `array`

**Default value:** `array()`

WordPress core includes style options for some core blocks. This plugin removes those style options by default, but this parameter can be used to re-enable the core style options for specific blocks. The following blocks have core styles that can be re-enabled via this parameter: `button`, `image`, `quote`, `separator`, `table`.

## Theme API

There are a few globally-available functions that can be used by your theme to retrieve data defined by this plugin's functionality. These functions are defined in the `Template.php` file at the root of the plugin directory, and exist under the `Upstatement\Editorial` namespace.

It is recommended that your theme implement these functions wrapped by a `function_exists` check to prevent undefined errors in the case that the plugin is disabled. For example:

```php
if ( function_exists( 'Upstatement\Editorial\get_post_authors' ) ) {
  $authors = \Upstatement\Editorial\get_post_authors();
  ...
```

### `get_post_authors`

```php
get_post_authors( WP_Post $post = null, string $field = null) : array | null
```

Retrieve a list of authors for a post.

#### Parameters

**`post`**

&nbsp;&nbsp;&nbsp;&nbsp;Post to retrieve authors for. Leave blank to use the current global post.

**`field`**

&nbsp;&nbsp;&nbsp;&nbsp;The field to return for each author. This can be any property from a WP_Term object. Leave blank to return the entire WP_Term object.

#### Return

Returns an array consisting of author data. If **`field`** is blank, this will be an array of `WP_Term` objects. If a **`field`** is specific, this will be an array of values for that field.

### `get_post_overline`

```php
get_post_overline( WP_Post $post = null ) : WP_Term | null
```

Retrieve the overline category for a post.

#### Parameters

**`post`**

&nbsp;&nbsp;&nbsp;&nbsp;Post to retrieve the overline for. Leave blank to use the current global post.

#### Return

Returns the `WP_Term` object of the category term identified as the overline, or null if none is set.

## Troubleshooting

### "I've updated the content in the Editorial sidebar, but it's not appearing in the preview."

This is a known issue with Wordpress Gutenberg where post meta doesn't save until the `Update` button is pressed. We're currently tracking the main issue at [WordPress/gutenberg#14900](https://github.com/WordPress/gutenberg/issues/14900), but until then you can try one of the following steps:

- After updating the sidebar content, press the `Update` button and then the `Preview` button.

- Press the `Preview` button twice. Sometimes the meta is only available for every-other preview.

- Attempt a hard refresh in the preview window (<kbd>command</kbd>+<kbd>shift</kbd>+<kbd>R</kbd> in Google Chrome).

### Block validation and recovery

When changing the saved markup of existing or new components, you are likely to come across an issue with block validation.

This error occurs when the markup of a block on last save doesn't match the markup of the block when it loads within the editor.

If this error was intentional, the easiest way to bypass the issue is:

1. In the top right corner of the block, press the three dots.

2. Select the `Attempt block recovery` option. This will re-render the block markup according to the latest version of the save function.

3. `Update` the post to save the latest block markup.

If the error was unintentional, your console will be the best place to identify what went wrong. That may look something like this:

```html
Block validation: Block validation failed for `ups/image` Content generated by `save` function:

<figure class="wp-block-image">
  <img src="/good-image.png" alt="A good image" />
  <figcaption>This is the caption</figcaption>
  <cite>This is a new citation</cite>
</figure>

Content retrieved from post body:

<figure class="wp-block-image">
  <img src="/good-image.png" alt="A good image" />
  <figcaption>This is the caption</figcaption>
</figure>
```

> In the case above, there was a new `cite` element added to the markup after the block was already saved to the post. At this point you can either (1) choose the `Attempt block recovery` option to update the markup, (2) remove and recreate the block, or (3) revert the save function to remove the `cite` element.

## Local Development

To make changes to this plugin, you can download this repository and add it to the `plugins/` directory of any running WordPress instance. You'll also need to perform some setup steps to ensure that you have all the built dependencies:

To start working locally, you'll need the following things on your machine:

- [nvm](https://github.com/nvm-sh/nvm) to manage the Node version this project is running on.
- [composer](https://getcomposer.org/) to manage PHP dependencies and autoloading.

Once the above are installed, you can get set up with the following steps:

1. Ensure you're running the expected version of Node:

   ```shell
   nvm install
   ```

2. Install Node dependencies:

   ```shell
   npm install
   ```

3. Install composer dependencies and generate autoloaders:

   ```shell
   composer install
   ```

4. Watch the plugin files for changes:

   ```shell
   npm run start
   ```

You can build the static front-end assets at any time with the following script:

```shell
npm run build
```

## Resources

During the development of this plugin, we found the following resources to be useful:

- [Block editor overview](https://wordpress.org/support/article/wordpress-editor/)
- [List of core blocks](https://wordpress.org/support/article/blocks/)
- [Block design best practices](https://developer.wordpress.org/block-editor/designers/block-design/)
- [Block editor developer tutorials](https://developer.wordpress.org/block-editor/tutorials/)
- [Block editor components](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page)
- [Gutenberg developer documentation](https://developer.wordpress.org/block-editor/developers/)
- [Gutenberg GitHub repository](https://github.com/WordPress/gutenberg)

# Upstatement Editorial

A WordPress plugin for enhancing the editorial experience, including some common customizations for the [Gutenberg](https://wordpress.org/gutenberg/) editor.

## Table of Contents

- [What This Plugin Does](#what-this-plugin-does)
  - [Blocks](#blocks)
  - [Editor Plugins](#editor-plugins)
- [Theme Configuration](#theme-configuration)
- [Theme API](#theme-api)
- [Troubleshooting](#troubleshooting)
- [Local Development](#local-development)
- [Resources](#resources)

## What This Plugin Does

The purpose of this plugin is to tailor the Gutenberg editor experience to be better suited to editors using their WordPress theme. Features added as a part of this plugin fall into two categories: block modifications (including new blocks and updates to core blocks) and editor plugins.

### Blocks

#### New blocks

- [Image Block](./src/blocks/custom/image/index.js) (replaces the core image block)

  - Adds support for the `Alt Text` and `Credit` attachment fields in the media library
  - Updates the default caption state to pull from the `Caption` attachment field
  - Adds support for the custom Modal Gallery component in the main Editorial theme
  - Removes unneeded features from core image block, including border styles

#### Extended Blocks

- [Button](./src/blocks/extends/button/index.js)
- [Cover](./src/blocks/extends/cover/index.js)
- [File](./src/blocks/extends/file/index.js)
- [Gallery](./src/blocks/extends/gallery/index.js)
- [Image Layout](./src/blocks/extends/image-layout/index.js)
- [Related Articles](./src/blocks/extends/related-articles/index.js)
- [Table](./src/blocks/extends/table/index.js)
- [Video](./src/blocks/extends/video/index.js)

> Note that you can continue to extend core block functionality in your theme by using WordPress's [blocks.registerBlockType](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype) and [editor.BlockEdit](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit) filters.

### Editor Plugins

Our main Gutenberg "plugin" adds two panels to the main sidebar of posts: the Article Topper & Bylines panels.

#### Article Topper Panel

The article topper panel controls article post metadata concerned with the article topper. This includes:

- `Topper type`: The look and feel of the topper, be it text-only or a site-width featured image
- `Navigation theme`: When paired with dark background image toppers, an already dark-themed nav can appear invisible. This option allows for lighter navigation themes
- `Overline`: Choose a primary category for your article to allow for better recirculation amongst common themes

#### Bylines Panel

The bylines panel allows editors to assign multiple authors to the author byline. This process starts with the `Authors` section under `Posts`, where you can create author profiles.

These authors also serve as taxonomies for your articles, so archive pages full of an author's own content are auto-generated on your behalf.

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
  'bylines'        => true,
  'article_topper' => true,
);
```

### Configuration

#### `bylines`

**Allowed types:** `boolean`

**Default value:** `true`

Enable or disable the plugin's `Author` taxonomy, as well as the control mechanism for setting bylines for an individual post.

#### `article_topper`

**Allowed types:** `boolean`

**Default value:** `true`

Enable or disable the registration of fields for article toppers and the Gutenberg panel that controls those fields.

## Theme API

There are a few globally-available functions that can be used by your theme to retrieve data defined by this plugin's functionality. These functions are defined in the `Template.php` file at the root of the plugin directory, and exist under the `Upstatement\Editorial` namespace.

### `get_post_bylines`

```php
get_post_bylines( WP_Post $post = null, string $field = null) : array | null
```

Retrieve the byline for a post.

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

The Github repository includes a docker setup that will allow you to run a basic WordPress installation with the Upstatement Editorial plugin installed. You'll need to ensure that you have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed on your machine first.

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

3. Watch the plugin files for changes:

   ```shell
   npm run start
   ```

4. Start the docker containers (note that the `-d` flag will run the container in the background):

   ```shell
   docker-compose up -d --build
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

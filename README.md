# Upstatement Editorial

A plugin for enhancing the WordPress editorial experience, including some common customizations for the [Gutenberg](https://wordpress.org/gutenberg/) editor.

## Table of Contents

- [What This Plugin Does](#what-this-plugin-does)
- [Local Development](#local-development)
- [Directory Structure](#directory-structure)
- [Gutenberg Blocks](#gutenberg-blocks)
  - [Custom Blocks](#custom-blocks)
  - [Extended Blocks](#extended-blocks)
- [Gutenberg Plugins](#gutenberg-plugins)
  - [Article Topper Panel](#article-topper-panel)
  - [Bylines Panel](#bylines-panel)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

## What This Plugin Does

The purpose of this plugin is to tailor the Gutenberg editor experience to be better suited to editors using Upstatement WordPress themes. This means a variety of things, such as:

- Removing default block settings (like selecting font colors)
- Limiting alignment options for blocks
- Excluding extraneous core blocks from the Gutenberg selector
- Replacing the core image block with a custom image block to expose theme-related functionality
- Allowing for multiple authors to appear on the byline

## Local Development

This repository includes a docker setup that will allow you to run a basic WordPress installation with the ups-block plugin installed. You'll need to ensure that you have [Docker Desktop](https://www.docker.com/products/docker-desktop) installed on your machine first.

To start working locally:

1. Install Node and NPM via [nvm](https://github.com/nvm-sh/nvm):

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

## Directory Structure

```text
.
├── lib                     # Functions that are used outside of this plugin
├── src
│   ├── blocks
│   │   ├── custom          # Custom Gutenberg blocks we've created
│   │   ├── extends         # Extending core Gutenberg blocks
│   │   ├── editor.scss     # Styles for the editor interface
│   │   ├── index.js        # Entry point for registering & extending blocks
│   │   └── style.scss      # Styles for our blocks on the front-end
│   ├── components          # Reusable components across blocks and plugins
│   ├── hooks               # Custom React hooks
│   ├── plugins             # Custom Gutenberg plugins
│   │   ├── index.js        # Entry point for registering Gutenberg plugins
│   │   └── style.scss      # Styles for our Gutenberg plugins
│   ├── style               # Reusable Sass styles and variables across blocks and plugins
│   └── utils               # Utility functions
├── index.php               # Entry point for enqueuing our plugin's scripts & styles
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js
```

## Gutenberg Blocks

### Custom Blocks

> _Note:_ When adding new custom blocks, be sure to add their names to the `CUSTOM_BLOCKS` array within [`lib/exclude_blocks.php`](./lib/exclude_blocks.php) to ensure it can appear in the block selector.

- [Image Block](./src/blocks/custom/image/index.js) (replaces the core image block)

  - Adds support for the `Alt Text` and `Credit` attachment fields in the media library
  - Updates the default caption state to pull from the `Caption` attachment field
  - Adds support for the custom Modal Gallery component in the main Editorial theme
  - Removes unneeded features from core image block, including border styles

#### When to go custom?

There are a few considerations one should have before choosing to add a new custom block.

1.  _Is there an existing block which already handles the functionality I need?_

    Building a custom block is a considerable amount of work. If we can save time by using an already existing core block, it's better to go that route.

2.  _Are similar existing blocks limited in the functionality you require?_

    While core blocks can often fulfill most of our requirements, there are cases in which they don't have everything we need to move forward. It's at this point that we can make a choice of whether to extend an existing block or go custom. When only minimal changes are needed (such as updating alignment support, adding a new attribute, or updating the block inspector panel), it's best to just extend the block. When this is not the case and dramatic changes to the existing block's API are needed, you might be better off going custom.

3.  _Will the addition of this custom block improve the editor experience?_

    Gutenberg blocks were created as a way to provide a near-seamless editor experience, where editors can visually add content and layout a page that will look and feel like the final product. We hope to continue that philosophy and only choose and create blocks we believe will empower an editor to create the best content. This may include limiting which controls an editor has access to, adding functionality that links to custom theme code, or designing a new experience to match the needs of a unique design. If the time spent creating a custom block is worth the time saved for the editor in using it, then going custom can be the right choice.

### Extended Blocks

- [Button](./src/blocks/extends/button/index.js)
- [Cover](./src/blocks/extends/cover/index.js)
- [File](./src/blocks/extends/file/index.js)
- [Gallery](./src/blocks/extends/gallery/index.js)
- [Image Layout](./src/blocks/extends/image-layout/index.js)
- [Related Articles](./src/blocks/extends/related-articles/index.js)
- [Table](./src/blocks/extends/table/index.js)
- [Video](./src/blocks/extends/video/index.js)

You can extend core block functionality by using WordPress's [blocks.registerBlockType](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#blocks-registerblocktype) and [editor.BlockEdit](https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit) filters.

## Gutenberg Plugins

Our main Gutenberg "plugin" adds two panels to the main sidebar of posts: the Article Topper & Bylines panels.

### Article Topper Panel

The article topper panel controls article post metadata concerned with the article topper. This includes:

- `Topper type`: The look and feel of the topper, be it text-only or a site-width featured image
- `Navigation theme`: When paired with dark background image toppers, an already dark-themed nav can appear invisible. This option allows for lighter navigation themes
- `Overline`: Choose a primary category for your article to allow for better recirculation amongst common themes

### Bylines Panel

The bylines panel allows editors to assign multiple authors to the author byline. This process starts with the `Authors` section under `Posts`, where you can create author profiles.

These authors also serve as taxonomies for your articles, so archive pages full of an author's own content are auto-generated on your behalf.

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

## Resources

During the development of this plugin, we found the following resources to be useful:

- [Block editor overview](https://wordpress.org/support/article/wordpress-editor/)
- [List of core blocks](https://wordpress.org/support/article/blocks/)
- [Block design best practices](https://developer.wordpress.org/block-editor/designers/block-design/)
- [Block editor developer tutorials](https://developer.wordpress.org/block-editor/tutorials/)
- [Block editor components](https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page)
- [Gutenberg developer documentation](https://developer.wordpress.org/block-editor/developers/)
- [Gutenberg GitHub repository](https://github.com/WordPress/gutenberg)

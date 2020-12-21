import { createBlock } from '@wordpress/blocks';
import { ATTR, NAME } from './index';
import { ALIGN, SIZE } from '@src/utils/constants';

const imageSchema = {
  img: {
    attributes: ['src', 'alt', 'title'],
    classes: ['alignleft', 'aligncenter', 'alignright', 'alignnone', /^wp-image-\d+$/],
  },
};

const imageTransforms = {
  from: [
    {
      type: 'raw',
      isMatch: node => node.nodeName === 'FIGURE' && !!node.querySelector('img'),
      schema: ({ phrasingContentSchema }) => ({
        figure: {
          require: ['img'],
          children: {
            ...imageSchema,
            a: {
              attributes: ['href', 'rel', 'target'],
              children: imageSchema,
            },
            figcaption: {
              children: phrasingContentSchema,
            },
          },
        },
      }),
      transform: node => {
        // Search both figure and image classes. Alignment could be
        // set on either. ID is set on the image.
        const url = node.querySelector('img').src;
        const className = `${node.className} ${node.querySelector('img').className}`;
        const alignMatches = /(?:^|\s)align(left|center|right)(?:$|\s)/.exec(className);
        const align = alignMatches ? alignMatches[1] : ALIGN.center;
        const sizeMatches = /(?:^|\s)size-(thumbnail|medium|large|full)(?:$|\s)/.exec(className);
        const size = sizeMatches ? sizeMatches[1] : SIZE.full;
        const idMatches = /(?:^|\s)wp-image-(\d+)(?:$|\s)/.exec(className);
        const alt = node.querySelector('img').alt;
        const id = idMatches ? Number(idMatches[1]) : undefined;

        return createBlock(NAME, {
          [ATTR.align]: align || ALIGN.center,
          [ATTR.alt]: alt,
          [ATTR.hideFromModalGallery]: false,
          [ATTR.id]: id,
          [ATTR.isExample]: false,
          [ATTR.size]: size,
          [ATTR.url]: url,
        });
      },
    },
    {
      type: 'shortcode',
      tag: 'caption',
      attributes: {
        align: {
          type: 'string',
          shortcode: ({ named: { align = 'alignnone' } }) => align.replace('align', ''),
        },
        alt: {
          type: 'string',
          source: 'attribute',
          attribute: 'alt',
          selector: 'img',
        },
        caption: {
          shortcode: (attributes, { shortcode }) => {
            const { body } = document.implementation.createHTMLDocument('');
            body.innerHTML = shortcode.content;

            let nodeToRemove = body.querySelector('img');

            // if an image has parents, find the topmost node to remove
            while (nodeToRemove && nodeToRemove.parentNode && nodeToRemove.parentNode !== body) {
              nodeToRemove = nodeToRemove.parentNode;
            }

            if (nodeToRemove) {
              nodeToRemove.parentNode.removeChild(nodeToRemove);
            }

            return body.innerHTML.trim();
          },
        },
        id: {
          type: 'number',
          shortcode: ({ named: { id } }) => {
            if (!id) {
              return;
            }
            return parseInt(id.replace('attachment_', ''), 10);
          },
        },
        size: {
          type: 'string',
          shortcode: (attributes, { shortcode }) => {
            const { body } = document.implementation.createHTMLDocument('');
            body.innerHTML = shortcode.content;
            const img = body.querySelector('img');

            if (!img) {
              return 'full';
            }

            const sizeMatches = /(?:^|\s)size-(thumbnail|medium|large|full)(?:$|\s)/.exec(
              img.className,
            );
            const size = sizeMatches ? sizeMatches[1] : SIZE.full;

            return size || 'full';
          },
        },
        url: {
          type: 'string',
          source: 'attribute',
          attribute: 'src',
          selector: 'img',
        },
      },
    },
    {
      type: 'block',
      blocks: ['core/image'],
      transform: attributes =>
        createBlock(NAME, {
          [ATTR.align]: attributes.align || ALIGN.center,
          [ATTR.alt]: attributes.alt,
          [ATTR.caption]: attributes.caption,
          [ATTR.hideFromModalGallery]: false,
          [ATTR.id]: attributes.id,
          [ATTR.isExample]: false,
          [ATTR.size]: attributes.sizeSlug || SIZE.full,
          [ATTR.url]: attributes.url,
        }),
    },
  ],
};

export default imageTransforms;

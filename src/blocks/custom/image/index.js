import { getEnum } from '@src/utils';
import { ALIGN, SIZE } from '@src/utils/constants';
import deprecated from './deprecated';
import edit from './edit';
import save from './save';
import transforms from './transforms';

const attributes = {
  align: {
    type: 'string',
    default: ALIGN.center,
  },
  alt: {
    type: 'string',
  },
  caption: {
    type: 'string',
  },
  credit: {
    type: 'string',
  },
  hideFromModalGallery: {
    type: 'boolean',
    default: false,
  },
  id: {
    type: 'number',
  },
  isExample: {
    type: 'boolean',
    default: false,
  },
  size: {
    type: 'string',
    default: SIZE.full,
  },
  sizes: {
    type: 'object',
  },
  url: {
    type: 'string',
  },
};

export const NAME = 'ups/image';
export const ATTR = getEnum(attributes);

export default {
  name: NAME,
  settings: {
    title: 'Image',
    description: 'Insert an image to make a visual statement.',
    category: 'common',
    icon: 'format-image',
    keywords: ['upstatement', 'image'],
    supports: {
      align: true,
    },
    attributes,
    example: {
      attributes: {
        [ATTR.caption]: 'Mont Blanc appears—still, snowy, and serene.',
        [ATTR.isExample]: true,
        [ATTR.size]: SIZE.full,
        [ATTR.url]: 'https://s.w.org/images/core/5.3/MtBlanc1.jpg',
      },
    },
    edit,
    save,
    transforms,
    deprecated,
  },
};

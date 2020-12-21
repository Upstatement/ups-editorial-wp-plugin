import { ALIGN, SIZE } from '@src/utils/constants';
import save from './save';

export default {
  attributes: {
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
  },
  save,
  supports: {
    align: true,
  },
};

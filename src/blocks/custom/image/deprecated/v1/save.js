import PropTypes from 'prop-types';
import { RichText } from '@wordpress/block-editor';
import { escapeQuotes } from '@src/utils';
import { SIZE } from '@src/utils/constants';
import { ATTR } from '../../index';

const ImageSave = ({
  attributes: {
    [ATTR.align]: align,
    [ATTR.alt]: alt,
    [ATTR.caption]: caption,
    [ATTR.credit]: credit,
    [ATTR.hideFromModalGallery]: hideFromModalGallery,
    [ATTR.sizes]: sizes,
    [ATTR.size]: size,
    [ATTR.url]: url,
  },
}) => {
  const srcProps = { src: url };

  if (sizes) {
    const defaultSize = sizes[SIZE.large] || sizes[SIZE.full];
    const chosenSize = sizes[size] || defaultSize;

    if (chosenSize) {
      const srcSet = Object.values(sizes)
        .map(({ width, source_url }) => `${source_url} ${width}w`)
        .join(', ');
      const getSizes = size => `(max-width: ${size.width}px) 100vw, ${size.width}px`;

      if (size !== SIZE.thumbnail) {
        srcProps.sizes = getSizes(chosenSize);
        srcProps.srcset = srcSet;
      } else if (!hideFromModalGallery) {
        // Provide dataset attributes for modal gallery slides
        srcProps['data-src'] = defaultSize.source_url;
        srcProps['data-sizes'] = getSizes(defaultSize);
        srcProps['data-srcset'] = srcSet;
      }

      srcProps.src = chosenSize.source_url;
    }
  }

  if (!srcProps.src) {
    return null;
  }

  let content = caption ? [caption] : [];
  if (credit) {
    content.push(`<cite>${credit}</cite>`);
  }
  content = content.join(' ');

  return (
    <figure className={`align${align}`}>
      {url && (
        <img
          className={hideFromModalGallery && 'js-modal-gallery__hidden'}
          {...srcProps}
          alt={alt}
          data-caption={escapeQuotes(caption)}
          data-credit={escapeQuotes(credit)}
        />
      )}
      <RichText.Content tagName="figcaption" value={content} />
    </figure>
  );
};

ImageSave.propTypes = {
  attributes: PropTypes.object.isRequired,
};

export default ImageSave;

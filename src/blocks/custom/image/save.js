import PropTypes from 'prop-types';
import { RichText } from '@wordpress/block-editor';
import { escapeQuotes } from '@src/utils';
import { SIZE } from '@src/utils/constants';
import { ATTR } from './index';

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
  const srcProps = { 'data-src': url };
  let padding = 0;

  if (sizes) {
    const defaultSize = sizes[SIZE.large] || sizes[SIZE.full];
    const chosenSize = sizes[size] || defaultSize;

    if (chosenSize) {
      const srcSet = Object.values(sizes)
        .map(({ width, source_url }) => `${source_url} ${width}w`)
        .join(', ');
      padding = `${(chosenSize.height / chosenSize.width) * 100}%`;
      srcProps['data-src'] = chosenSize.source_url;
      srcProps['data-sizes'] = 'auto';

      if (size !== SIZE.thumbnail) {
        srcProps['data-srcset'] = srcSet;
      } else if (!hideFromModalGallery) {
        // Provide dataset attributes for modal gallery slides
        srcProps['data-src'] = defaultSize.source_url;
        srcProps['data-srcset'] = srcSet;
      }
    }
  }

  if (!srcProps['data-src']) {
    return null;
  }

  let content = caption ? [caption] : [];
  if (credit) {
    content.push(`<cite>${credit}</cite>`);
  }
  content = content.join(' ');

  return (
    <figure className={`align${align}`}>
      <div className="lazy-img__mod lazy-img__mod--black">
        <span className={'lazy-img__placeholder'} style={`padding-top: ${padding}`}></span>
        {url && (
          <img
            className={`lazy-img lazyload ${hideFromModalGallery && 'js-modal-gallery__hidden'}`}
            {...srcProps}
            alt={alt}
            data-caption={escapeQuotes(caption)}
            data-credit={escapeQuotes(credit)}
          />
        )}
      </div>
      <RichText.Content tagName="figcaption" value={content} />
    </figure>
  );
};

ImageSave.propTypes = {
  attributes: PropTypes.object.isRequired,
};

export default ImageSave;

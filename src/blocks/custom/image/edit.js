import PropTypes from 'prop-types';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useFieldUtils, useMedia } from '@src/hooks';
import { MediaControl } from '@src/components';
import { ALIGN, MEDIA_TYPES, RICH_TEXT_FORMATS, SIZE_OPTIONS } from '@src/utils/constants';
import { ATTR } from './index';

const ImageEdit = ({ attributes, className, setAttributes }) => {
  const { getFieldProps } = useFieldUtils(attributes, setAttributes);

  /**
   * Updates the attributes for the image block when an image has been uploaded via
   * the `MediaControl` component. If no image data is available, the block will reset.
   *
   * @param {object|null} data the uplaoded image data, or null if the image was removed
   */
  const setImage = data => {
    if (data) {
      const newAttributes = {
        [ATTR.id]: data.id,
        [ATTR.url]: data.source_url,
        [ATTR.alt]: data.alt_text,
        [ATTR.credit]: data.credit,
        [ATTR.sizes]: (data.media_details && data.media_details.sizes) || {},
      };

      if (attributes[ATTR.id] !== data.id && !attributes[ATTR.caption]) {
        // if a new image is selected and there is no set caption
        const tempWrapper = document.createElement('div');
        tempWrapper.innerHTML = data.caption.rendered;
        newAttributes[ATTR.caption] = tempWrapper.innerText || '';
      }

      setAttributes(newAttributes);
    } else {
      setAttributes({
        [ATTR.id]: 0,
        [ATTR.url]: '',
        [ATTR.alt]: '',
        [ATTR.caption]: '',
        [ATTR.credit]: '',
        [ATTR.sizes]: null,
      });
    }
  };
  const [image, isLoading, onImageUpload] = useMedia(
    attributes[ATTR.id],
    setImage,
    attributes[ATTR.size],
  );

  const visibleInModalGallery = !attributes[ATTR.hideFromModalGallery];
  /**
   * Setter for whether the image should be visible to the modal gallery.
   *
   * @param {boolean} value the new inverse value of the `hideFromModalGallery` attribute
   */
  const setVisibleInModalGallery = value => {
    setAttributes({
      [ATTR.hideFromModalGallery]: !value,
    });
  };

  useEffect(() => {
    if (image && !attributes[ATTR.sizes]) {
      // result of transformation
      onImageUpload(image);
    }
  }, [image, attributes[ATTR.sizes]]);

  let displayImage = image;
  if (attributes[ATTR.isExample]) {
    displayImage = {
      url: attributes[ATTR.url],
      mime: MEDIA_TYPES.image,
    };
  }

  return (
    <div className={className}>
      {displayImage && (
        <InspectorControls>
          <PanelBody title="Image settings">
            {attributes[ATTR.sizes] && (
              <SelectControl
                label="Image size"
                {...getFieldProps(ATTR.size)}
                options={SIZE_OPTIONS.filter(({ value }) => !!attributes[ATTR.sizes][value])}
              />
            )}
            <TextControl
              readOnly
              label="Credit"
              help="Credit is pulled from the media library attachment. Try reattaching the image to refresh the credit."
              value={attributes[ATTR.credit]}
            />
          </PanelBody>
          <PanelBody title="Modal gallery">
            <ToggleControl
              checked={visibleInModalGallery}
              onChange={setVisibleInModalGallery}
              label={`${visibleInModalGallery ? 'Visible in' : 'Hidden from'} modal gallery`}
            />
          </PanelBody>
        </InspectorControls>
      )}

      <MediaControl
        allowedTypes={[MEDIA_TYPES.image]}
        asBlock
        fullWidth={new Set([ALIGN.wide, ALIGN.full]).has(attributes[ATTR.align])}
        loading={isLoading}
        value={displayImage}
        onChange={onImageUpload}
      />

      {(displayImage || attributes[ATTR.isExample]) && (
        <RichText
          disabled={isLoading}
          tagName="small"
          className="rich-text--caption"
          allowedFormats={[
            RICH_TEXT_FORMATS.bold,
            RICH_TEXT_FORMATS.italic,
            RICH_TEXT_FORMATS.link,
            RICH_TEXT_FORMATS.strikethrough,
          ]}
          inlineToolbar
          placeholder="Write caption..."
          {...getFieldProps(ATTR.caption)}
        />
      )}
    </div>
  );
};

ImageEdit.propTypes = {
  attributes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  setAttributes: PropTypes.func.isRequired,
};

export default ImageEdit;

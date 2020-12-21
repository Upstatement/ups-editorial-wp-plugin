import PropTypes from 'prop-types';
import { Button, BaseControl, Spinner } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { className } from '@src/utils';
import { MEDIA_TYPES } from '@src/utils/constants';
import './mediaControl.module.scss';

const MediaControl = ({
  allowedTypes,
  asBlock,
  fullWidth,
  help,
  hideLabelFromVision,
  id,
  label,
  loading,
  onChange,
  value,
}) => {
  /**
   * Handler for removing the image.
   */
  const onRemove = () => {
    onChange(null);
  };

  /**
   * Renders the preview for the media, or a placeholder if no media is available.
   */
  const renderPreview = () => {
    if (!value) {
      return (
        <div className="ues-media-control__preview__placeholder">
          {loading && (
            <span className="ues-media-control__preview__spinner">
              <Spinner />
            </span>
          )}
        </div>
      );
    } else if (value.mime.startsWith(MEDIA_TYPES.video)) {
      return (
        //eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          {...className(
            'ues-media-control__preview__actual',
            fullWidth && 'ues-media-control__preview__actual--full',
          )}
          autoPlay
          loop
          muted>
          <source src={value.url} type={value.mime} />
        </video>
      );
    }
    return (
      <img
        {...className(
          'ues-media-control__preview__actual',
          fullWidth && 'ues-media-control__preview__actual--full',
        )}
        src={value.url}
        alt={value.alt}
      />
    );
  };

  return (
    <BaseControl
      {...className('ues-media-control', asBlock && 'ues-media-control--block')}
      label={label}
      help={help}
      hideLabelFromVision={hideLabelFromVision}
      id={id}>
      <div className="ues-media-control__preview">
        {!loading && (
          <div
            {...className(
              'ues-media-control__action',
              value && 'ues-media-control__action--hover',
            )}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onChange}
                allowedTypes={allowedTypes}
                value={value ? value.id : null}
                render={({ open }) => (
                  <Button className="ues-media-control__action__btn" isSecondary onClick={open}>
                    {value ? 'Edit' : 'Choose media'}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {value && (
              <Button className="ues-media-control__action__btn" isSecondary onClick={onRemove}>
                Remove
              </Button>
            )}
          </div>
        )}
        {renderPreview()}
      </div>
    </BaseControl>
  );
};

MediaControl.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.string),
  asBlock: PropTypes.bool,
  fullWidth: PropTypes.bool,
  help: PropTypes.string,
  hideLabelFromVision: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    alt: PropTypes.string,
    id: PropTypes.string.isRequired,
    mime: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

MediaControl.defaultProps = {
  allowedTypes: [MEDIA_TYPES.image, MEDIA_TYPES.video],
  asBlock: false,
  fullWidth: false,
  loading: false,
};

export default MediaControl;

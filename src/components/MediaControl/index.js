import PropTypes from 'prop-types';
import { Button, BaseControl, Spinner } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { className } from '../../utils';
import { MEDIA_TYPES } from '../../utils/constants';
import styles from './mediaControl.module.scss';

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
        <div className={styles.placeholder}>
          {loading && (
            <span className={styles.spinner}>
              <Spinner />
            </span>
          )}
        </div>
      );
    } else if (value.mime.startsWith(MEDIA_TYPES.video)) {
      return (
        //eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          {...className(styles.previewActual, fullWidth && styles.previewActual__full)}
          autoPlay
          loop
          muted>
          <source src={value.url} type={value.mime} />
        </video>
      );
    }
    return (
      <img
        {...className(styles.previewActual, fullWidth && styles.previewActual__full)}
        src={value.url}
        alt={value.alt}
      />
    );
  };

  return (
    <BaseControl
      {...className(styles.mediaControl, asBlock && styles.mediaControl__block)}
      label={label}
      help={help}
      hideLabelFromVision={hideLabelFromVision}
      id={id}>
      <div className={styles.preview}>
        {!loading && (
          <div {...className(styles.action, value && styles.action__hover)}>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onChange}
                allowedTypes={allowedTypes}
                value={value ? value.id : null}
                render={({ open }) => (
                  <Button className={styles.btn} isSecondary onClick={open}>
                    {value ? 'Edit' : 'Choose media'}
                  </Button>
                )}
              />
            </MediaUploadCheck>
            {value && (
              <Button className={styles.btn} isSecondary onClick={onRemove}>
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

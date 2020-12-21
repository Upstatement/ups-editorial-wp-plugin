import PropTypes from 'prop-types';
import { TOPPER_TYPES } from '../constants';

const TextOnly = () => (
  <svg viewBox="0 0 288 189">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect fill="#ffffff" x="0.5" y="0.5" width="287" height="188"></rect>
      <rect fill="#DEDEDE" x="73" y="65" width="143" height="79"></rect>
      <rect fill="#DEDEDE" x="73" y="151" width="143" height="37"></rect>
      <rect fill="#000000" x="73" y="18" width="143" height="16"></rect>
      <rect fill="#000000" x="73" y="40" width="98" height="16"></rect>
      <rect stroke="#000000" x="0.5" y="0.5" width="287" height="188"></rect>
    </g>
  </svg>
);

const SmallImage = () => (
  <svg viewBox="0 0 288 189">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect fill="#ffffff" x="0.5" y="0.5" width="287" height="188"></rect>
      <rect fill="#CEE1EC" x="73" y="65" width="143" height="79"></rect>
      <rect fill="#DEDEDE" x="73" y="151" width="143" height="37"></rect>
      <rect fill="#000000" x="73" y="18" width="143" height="16"></rect>
      <rect fill="#000000" x="73" y="40" width="98" height="16"></rect>
      <rect stroke="#000000" x="0.5" y="0.5" width="287" height="188"></rect>
    </g>
  </svg>
);

const SiteWidthImage = () => (
  <svg viewBox="0 0 288 189">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect fill="#ffffff" x="0.5" y="0.5" width="287" height="188"></rect>
      <rect fill="#DEDEDE" x="73" y="175" width="143" height="14"></rect>
      <rect fill="#CEE1EC" x="51" y="65" width="187" height="101"></rect>
      <rect fill="#000000" x="51" y="18" width="143" height="16"></rect>
      <rect fill="#000000" x="51" y="40" width="98" height="16"></rect>
      <rect stroke="#000000" x="0.5" y="0.5" width="287" height="188"></rect>
    </g>
  </svg>
);

const BgImage = () => (
  <svg viewBox="0 0 288 189">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect fill="#ffffff" x="0.5" y="0.5" width="287" height="188"></rect>
      <rect fill="#DEDEDE" x="73" y="148" width="143" height="40"></rect>
      <rect fill="#CEE1EC" x="0" y="0" width="288" height="134"></rect>
      <rect fill="#000000" x="73" y="80" width="143" height="16"></rect>
      <rect fill="#000000" x="73" y="102" width="98" height="16"></rect>
      <rect stroke="#000000" x="0.5" y="0.5" width="287" height="188"></rect>
    </g>
  </svg>
);

const TopperPreview = ({ value }) => {
  const previewMap = {
    [TOPPER_TYPES.TEXT_ONLY]: TextOnly,
    [TOPPER_TYPES.SMALL_IMAGE]: SmallImage,
    [TOPPER_TYPES.SITE_WIDTH_IMAGE]: SiteWidthImage,
    [TOPPER_TYPES.BG_IMAGE]: BgImage,
  };

  const Preview = previewMap[value || TOPPER_TYPES.TEXT_ONLY];

  if (!Preview) {
    return null;
  }

  return (
    <div className="topper-preview">
      <span className="topper-preview__window">
        <Preview />
      </span>
    </div>
  );
};

TopperPreview.propTypes = {
  value: PropTypes.string,
};

export default TopperPreview;

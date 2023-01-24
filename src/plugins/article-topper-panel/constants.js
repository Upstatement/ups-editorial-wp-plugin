//--------------------------------------
// topper_type
//--------------------------------------
export const TOPPER_TYPES = {
  TEXT_ONLY: 'text_only',
  SMALL_IMAGE: 'small_image',
  SITE_WIDTH_IMAGE: 'site_width_image',
  BG_IMAGE: 'bg_image',
};

export const IMAGE_TOPPER_SET = new Set([
  TOPPER_TYPES.SMALL_IMAGE,
  TOPPER_TYPES.SITE_WIDTH_IMAGE,
  TOPPER_TYPES.BG_IMAGE,
]);

export const TOPPER_TYPE_OPTIONS = [
  {
    value: TOPPER_TYPES.TEXT_ONLY,
    label: 'Text only',
  },
  {
    value: TOPPER_TYPES.SMALL_IMAGE,
    label: 'Small image',
  },
  {
    value: TOPPER_TYPES.SITE_WIDTH_IMAGE,
    label: 'Site-width image',
  },
  {
    value: TOPPER_TYPES.BG_IMAGE,
    label: 'Background image',
  },
];

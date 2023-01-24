import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';
import { useState, useEffect, Fragment } from '@wordpress/element';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import {
  SelectControl,
  TextareaControl,
  ToggleControl,
  TextControl,
  ExternalLink,
  Spinner,
} from '@wordpress/components';

import { MediaControl } from '../../components';
import { useFieldUtils, useMedia, useMetaReducer } from '../../hooks';
import { unescape } from '../../utils';
import { MEDIA_TYPES } from '../../utils/constants';
import { IMAGE_TOPPER_SET, TOPPER_TYPE_OPTIONS } from './constants';
import { TopperPreview } from './components';

import './article-topper-panel.scss';

const META = {
  is_light_nav: 'is_light_nav',
  topper_type: 'topper_type',
  topper_overline: 'topper_overline',
  topper_description: 'topper_description',
  topper_image: 'topper_image',
  topper_caption: 'topper_caption',
  topper_video_poster: 'topper_video_poster',
  topper_hide_in_modal_gallery: 'topper_hide_in_modal_gallery',
};

const UNCATEGORIZED_ID = 1;

const ArticleTopperPanel = () => {
  const editedCategoryIds = useSelect(select =>
    select('core/editor').getEditedPostAttribute('categories'),
  );

  const [meta, setMeta] = useMetaReducer();
  const { getFieldProps } = useFieldUtils(meta, setMeta);

  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [overlineOptions, setOverlineOptions] = useState([]);

  /**
   * Helper factory for creating media upload handlers. Updates a given meta property
   * to the uploaded media's ID, or `0` if none.
   *
   * @param {string} name the name of the meta property to update
   * @returns {(data: { id: number }) => void} a function that sets the meta property on
   * data retrieval
   */
  const onMediaUpload = name => data => {
    const id = data ? data.id : 0;
    setMeta({ [name]: id });
  };

  const [topperImage, isTopperImageLoading, setTopperImage] = useMedia(
    meta[META.topper_image],
    onMediaUpload(META.topper_image),
  );

  const [topperVideoPoster, isTopperVideoPosterLoading, setTopperVideoPoster] = useMedia(
    meta[META.topper_video_poster],
    onMediaUpload(META.topper_video_poster),
  );

  const visibleInModalGallery = !meta[META.topper_hide_in_modal_gallery];
  /**
   * Setter for whether the topper image should be visible to the modal gallery.
   *
   * @param {boolean} value the new inverse value of the `topper_hide_in_modal_gallery` meta
   */
  const setVisibleInModalGallery = value => {
    setMeta({
      [META.topper_hide_in_modal_gallery]: !value,
    });
  };

  /**
   * Load post categories from the REST API
   */
  const loadPostCategories = async () => {
    let results = [];

    setIsCategoriesLoading(true);

    // If there are no categories selected, bail early
    if (!editedCategoryIds || !editedCategoryIds.length) {
      setMeta({ [META.topper_overline]: 0 });
      setCategories(results);
      setIsCategoriesLoading(false);
      return;
    }

    const categoryIds = editedCategoryIds.length ? editedCategoryIds.join(',') : [];

    if (categoryIds.length) {
      results = await apiFetch({
        path: `/wp/v2/categories?include=${categoryIds}`,
      });
    }

    setCategories(results);
    setIsCategoriesLoading(false);
  };

  /**
   * Fetch post categories on load
   */
  useEffect(() => {
    loadPostCategories();
  }, [editedCategoryIds]);

  /**
   * Once categories have been fetched, set dropdown options and default values
   */
  useEffect(() => {
    // Set overline dropdown options once categories have been fetched
    const options = categories
      .filter(c => c.id !== UNCATEGORIZED_ID)
      .map(c => ({
        value: c.id,
        label: unescape(c.name),
      }));

    setOverlineOptions(options);

    // If no overline has been set yet, default to first option
    if (options.length && !meta[META.topper_overline]) {
      setMeta({ [META.topper_overline]: options[0].value });
    }
  }, [categories]);

  return (
    <Fragment>
      <div className="row">
        <ToggleControl
          {...getFieldProps(META.is_light_nav, 'checked')}
          label={
            meta[META.is_light_nav] ? 'Using light top navigation' : 'Using dark top navigation'
          }
        />
      </div>

      <div className="row topper-type">
        <SelectControl
          className="topper-type__control"
          {...getFieldProps(META.topper_type)}
          label="Topper type"
          options={TOPPER_TYPE_OPTIONS}
        />
        <TopperPreview value={meta[META.topper_type]} />
      </div>

      <div className="row">
        {isCategoriesLoading ? (
          <Spinner />
        ) : overlineOptions.length ? (
          <SelectControl
            {...getFieldProps(META.topper_overline)}
            label="Overline"
            help="The article’s primary category"
            options={overlineOptions}
          />
        ) : (
          <Fragment>
            <label htmlFor="overline">Overline</label>
            <p id="overline" className="overline-empty">
              Assign a{' '}
              <ExternalLink href="https://make.wordpress.org/support/user-manual/content/categories-and-tags/">
                category
              </ExternalLink>{' '}
              to this post to use it for the overline
            </p>
          </Fragment>
        )}
      </div>

      <div className="row">
        <TextareaControl {...getFieldProps(META.topper_description)} label="Description" />
      </div>

      {IMAGE_TOPPER_SET.has(meta[META.topper_type]) && (
        <div className="row">
          <MediaControl
            label="Image/Video"
            loading={isTopperImageLoading}
            value={topperImage}
            onChange={setTopperImage}
          />
          <ToggleControl
            checked={visibleInModalGallery}
            onChange={setVisibleInModalGallery}
            label={`${visibleInModalGallery ? 'Visible in' : 'Hidden from'} modal gallery`}
          />
          <TextControl
            {...getFieldProps(META.topper_caption)}
            label="Caption"
            help="Optional caption override"
          />
          {topperImage && topperImage.mime.startsWith(MEDIA_TYPES.video) && (
            <MediaControl
              label="Video Poster"
              help="The default image to show while the video loads"
              allowedTypes={[MEDIA_TYPES.image]}
              loading={isTopperVideoPosterLoading}
              value={topperVideoPoster}
              onChange={setTopperVideoPoster}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};

export const name = 'article-topper-panel';

/**
 * The icon for the panel.
 * @see https://developer.wordpress.org/resource/dashicons/
 */
export const icon = 'format-image';

export const render = () => {
  const currentPostType = useSelect(select => select('core/editor').getCurrentPostType());

  // Only show on posts
  if (currentPostType !== 'post') {
    return null;
  }

  return (
    <PluginDocumentSettingPanel name={name} title="Article Topper" className="article-topper-panel">
      <ArticleTopperPanel />
    </PluginDocumentSettingPanel>
  );
};

export const enabled = window.ups_editorial?.article_topper;

import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { SIZE } from '@src/utils/constants';

/**
 * @typedef {{ id: number, source_url: string, alt_text: string credit: string, mime_type: string, media_details: { height: number, sizes: Record<string, object>, width: number } }} MediaUpload
 */

/**
 * @typedef {{ id: number, url: string, alt?: string, mime: string, aspect?: { width: number, height: number } }} Media the Media object for the UI
 */

/**
 *
 * @param {number} id the ID of the media attachment
 * @param {(data: MediaUpload | null) => void} [onMediaUpload] a media handler for when an image is uploaded
 * @param {string} [size='large'] the size of the media to display
 * @returns {[Media|null, boolean, (media: { id: number, [x: string]: any }) => void]} the media object (or null if not found), whether
 * the media is being loaded, and a setter function (for use with the `MediaControl` component)
 */
const useMedia = (id, onMediaUpload, size = SIZE.large) => {
  const [isLoading, setIsLoading] = useState(!!id);
  const [preview, setPreview] = useState(null);

  /**
   * Gets the selected media for the hook. There are three cases:
   * - If there isn't an ID, return `null`
   * - If there is a preview available, return that
   * - Otherwise (if initial media hasn't been fetched yet), return `undefined`
   */
  const selectedMedia = useMemo(() => {
    if (!id) {
      return null;
    } else if (preview) {
      return preview;
    }
    return undefined;
  }, [id, preview]);

  const resetMedia = () => {
    if (onMediaUpload) {
      onMediaUpload(null);
    }
    setPreview(null);
  };

  /**
   * Handler for updating the post meta data to include the new media ID.
   *
   * @param {{ id: number, [x: string]: any }} media the media selected via a `MediaControl` component
   */
  const handleMediaUpload = async media => {
    if (media) {
      setIsLoading(true);
      try {
        const data = await apiFetch({
          path: `/wp/v2/media/${media.id}`,
        });
        if (onMediaUpload) {
          onMediaUpload(data);
        }
        setPreview(data);
      } catch {
        resetMedia();
      }
      setIsLoading(false);
    } else {
      resetMedia();
    }
  };

  useEffect(() => {
    if (selectedMedia) {
      setIsLoading(false);
    } else if (selectedMedia === undefined) {
      // If initial media hasn't been fetched yet, fetch it
      handleMediaUpload({ id });
    }
  }, [selectedMedia]);

  let media = null;
  if (selectedMedia) {
    let url = selectedMedia.source_url;
    let aspect = null;

    const mediaDetails = selectedMedia.media_details;
    if (mediaDetails) {
      aspect = {
        width: mediaDetails.width,
        height: mediaDetails.height,
      };

      if (mediaDetails.sizes && mediaDetails.sizes[size]) {
        url = mediaDetails.sizes[size].source_url;
      }
    }

    media = {
      id: selectedMedia.id,
      url,
      alt: selectedMedia.alt_text,
      mime: selectedMedia.mime_type,
      aspect,
    };
  }

  return [media, isLoading, handleMediaUpload];
};

export default useMedia;

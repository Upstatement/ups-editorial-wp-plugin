import { useSelect, useDispatch } from '@wordpress/data';

/**
 * Updates the meta for the current post, for the given meta object.
 * @typedef {(newMeta: Record<string, any>) => void} SetMeta
 */

/**
 * Custom React hook for accessing and mutating post meta data.
 *
 * @returns {[Record<string, any>, SetMeta]} a tuple of the post meta data, and a setter function
 */
const useMetaReducer = () => {
  const meta = useSelect(select => select('core/editor').getEditedPostAttribute('meta'));
  const dispatch = useDispatch('core/editor');

  /**
   * Updates the meta for the current post, for the given field name and value.
   *
   * @param {Record<string, any>} newMeta the meta attributes to update
   */
  const setMeta = newMeta => {
    dispatch.editPost({
      meta: newMeta,
    });
  };

  return [meta, setMeta];
};

export default useMetaReducer;

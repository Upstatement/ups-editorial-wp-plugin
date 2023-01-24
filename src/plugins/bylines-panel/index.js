/**
 * Sets up the panel in the Gutenberg editor to manage bylines. The `ups_author`
 * taxonomy is defined in the \Upstatement\Editorial\Taxonomy\Author PHP class.
 */

import apiFetch from '@wordpress/api-fetch';
import { useEffect, useMemo, useState, Fragment } from '@wordpress/element';
import { dispatch, useSelect } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';

import { useMetaReducer } from '../../hooks';
import { move } from '../../utils';
import { AUTHOR_REORDER_DIRECTION } from './constants';
import AuthorSelect from './components/AuthorSelect';
import AuthorList from './components/AuthorList';

import './bylines-panel.scss';

const META = {
  bylines: 'bylines',
};

domReady(() => {
  // Remove built-in taxonomy UI for Authors
  dispatch('core/edit-post').removeEditorPanel('taxonomy-panel-ups_authors');
});

const BylinesPanel = () => {
  const [meta, setMeta] = useMetaReducer();

  const [authors, setAuthors] = useState([]);
  const authorIds = useMemo(() => authors.map(({ id }) => id), [authors]);

  /**
   * Add an author to post bylines.
   * @param {Object} author Author to add
   */
  const addAuthor = author => {
    const updatedAuthors = authors.concat(author);
    setAuthors(updatedAuthors);
  };

  /**
   * Remove an author from post bylines.
   * @param {Object} author Author to remove
   */
  const removeAuthor = author => {
    const updatedAuthors = authors.filter(a => a !== author);
    setAuthors(updatedAuthors);
  };

  /**
   * Reorder authors
   * @param {Object} author Author to move
   * @param {String} direction Direction to move author in the author list
   */
  const moveAuthor = (author, direction) => {
    const currIndex = authors.findIndex(({ id }) => id === author.id);
    let updatedAuthors;

    switch (direction) {
      case AUTHOR_REORDER_DIRECTION.up:
        // If direction is 'up', move the author to currIndex - 1
        updatedAuthors = move(authors, currIndex, currIndex - 1);
        setAuthors(updatedAuthors);
        break;

      case AUTHOR_REORDER_DIRECTION.down:
        // If direction is 'down', move the author to currIndex + 1
        updatedAuthors = move(authors, currIndex, currIndex + 1);
        setAuthors(updatedAuthors);
        break;

      default:
        break;
    }
  };

  /**
   * Load authors by id from the REST API.
   * @param {Array} ids List of author ids
   */
  const loadAuthors = async ids => {
    const results = await apiFetch({
      path: `/wp/v2/ups_authors?include=${encodeURIComponent(ids.join(','))}&orderby=include`,
    });
    setAuthors(results);
  };

  /**
   * Fetch author data for existing bylines on load.
   *
   * Bylines are stored in post meta as an array of author term IDs. This
   * backfils with full author details from the term.
   */
  useEffect(() => {
    const selectedAuthorIds = meta[META.bylines] || [];
    if (selectedAuthorIds.length) {
      loadAuthors(selectedAuthorIds);
    }
  }, []);

  /**
   * Persist author changes to post meta store.
   */
  useEffect(() => {
    setMeta({
      [META.bylines]: authorIds,
    });
  }, [authorIds]);

  return (
    <Fragment>
      <AuthorSelect exclude={authorIds} onSelect={addAuthor} />
      <AuthorList authors={authors} onRemove={removeAuthor} onMove={moveAuthor} />

      <a
        className="components-button is-secondary"
        href="/wp-admin/edit-tags.php?taxonomy=ups_authors">
        Add New Author
      </a>
    </Fragment>
  );
};

export const name = 'post-authors';

/**
 * The icon for the panel.
 * @see https://developer.wordpress.org/resource/dashicons/#admin-users
 */
export const icon = 'admin-users';

export const render = () => {
  const currentPostType = useSelect(select => select('core/editor').getCurrentPostType());

  // Only show on posts
  if (currentPostType !== 'post') {
    return null;
  }

  return (
    <PluginDocumentSettingPanel name={name} title="Authors" className="bylines-panel">
      <BylinesPanel />
    </PluginDocumentSettingPanel>
  );
};

export const enabled = window.ups_editorial?.bylines;

import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

/**
 * Hook for querying authors.
 *
 * @param {Object} options
 * @param {string} options.initialQuery Initial query string
 * @param {number[]} options.exclude List of author ids to exclude from query.
 */
export default function useAuthorsQuery({ initialQuery = '', exclude }) {
  const [query, setQuery] = useState(initialQuery);
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * @async
   *
   * Search for author by query term.
   * @param {string} query Search query
   */
  const queryAuthors = async query => {
    setIsLoading(true);
    const results = await apiFetch({
      path: `/wp/v2/ups_authors?search=${encodeURIComponent(query)}&exclude=${encodeURIComponent(
        exclude.join(','),
      )}`,
    });
    setAuthors(results);
    setIsLoading(false);
  };

  /**
   * Update author state when the query changes.
   */
  useEffect(() => {
    if (!query) {
      setAuthors([]);
      return;
    }

    queryAuthors(query);
  }, [query]);

  return [authors, isLoading, query, setQuery];
}

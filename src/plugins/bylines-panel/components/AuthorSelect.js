import { Fragment } from '@wordpress/element';
import { Spinner, TextControl } from '@wordpress/components';
import PropTypes from 'prop-types';
import { useAuthorsQuery } from '@src/hooks';
import SuggestionList from './SuggestionList';

export default function AuthorSelect({ exclude, onSelect }) {
  const [authors, isLoading, query, setQuery] = useAuthorsQuery({ initialQuery: '', exclude });

  /**
   * Handle author selection.
   * @param {Object} author Selected author
   */
  const handleSelect = author => {
    onSelect(author);
    setQuery('');
  };

  return (
    <Fragment>
      <TextControl label="Add author" value={query} onChange={setQuery} />
      {isLoading ? <Spinner /> : <SuggestionList suggestions={authors} onSelect={handleSelect} />}
    </Fragment>
  );
}

AuthorSelect.propTypes = {
  exclude: PropTypes.arrayOf(PropTypes.number),
  onSelect: PropTypes.func.isRequired,
};

AuthorSelect.defaultProps = {
  exclude: [],
};

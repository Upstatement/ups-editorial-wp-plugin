import PropTypes from 'prop-types';
import { Button } from '@wordpress/components';

export default function SuggestionList({ suggestions, onSelect }) {
  const handleClick = suggestion => event => {
    event.preventDefault();
    onSelect(suggestion);
  };

  return (
    <ul className="author-suggestions">
      {suggestions.map(suggestion => (
        <li key={suggestion.id}>
          <Button isLink icon="admin-users" onClick={handleClick(suggestion)}>
            {suggestion.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}

SuggestionList.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func.isRequired,
};

SuggestionList.defaultProps = {
  suggestions: [],
};

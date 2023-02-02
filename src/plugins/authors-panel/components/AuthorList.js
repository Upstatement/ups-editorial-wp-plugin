import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@wordpress/components';
import { AUTHOR_REORDER_DIRECTION } from '../constants';

export default function AuthorList({ authors, onRemove, onMove }) {
  const removeAuthor = author => () => onRemove(author);
  const moveUp = author => () => onMove(author, AUTHOR_REORDER_DIRECTION.up);
  const moveDown = author => () => onMove(author, AUTHOR_REORDER_DIRECTION.down);

  return (
    <ul className="author-list">
      {authors.map((author, i) => (
        <li key={author.id} className="author-list__item">
          <ButtonGroup className="author-list__move-menu">
            <Button
              className="button-up"
              isSmall
              isLink
              icon="arrow-up-alt2"
              label="Move Up"
              onClick={moveUp(author)}
              disabled={i === 0}
            />
            <Button
              className="button-down"
              isSmall
              isLink
              icon="arrow-down-alt2"
              label="Move Down"
              onClick={moveDown(author)}
              disabled={i === authors.length - 1}
            />
          </ButtonGroup>

          <span>{author.name}</span>

          <Button isSmall isLink icon="no" label="Remove" onClick={removeAuthor(author)} />
        </li>
      ))}
    </ul>
  );
}

AuthorList.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

AuthorList.defaultProps = {
  authors: [],
};

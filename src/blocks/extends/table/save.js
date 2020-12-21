import PropTypes from 'prop-types';
import { RichText } from '@wordpress/block-editor';
import { escapeQuotes, findAndReplaceElement } from '@src/utils';

/**
 * This is pulled from the `core/table` save element.
 *
 * We are updating this Section component in order to add a `data-th` attribute. This
 * enables responsive table design even when in AMP (where JS, especially attribute-mutating ones,
 * are stripped).
 *
 * @see https://github.com/WordPress/gutenberg/blob/4f804bb4c6/packages/block-library/src/table/save.js#L38-L77
 */
const Section = ({ type, rows }) => {
  if (!rows.length) {
    return null;
  }
  const Tag = `t${type}`;
  return (
    <Tag>
      {rows.map(({ cells }, rowIndex) => (
        <tr key={rowIndex}>
          {cells.map(({ content, tag, th, align }, cellIndex) => {
            let cellClasses;
            const dataAttrs = {};

            if (align) {
              cellClasses = `has-text-align-${align}`;
              dataAttrs['data-align'] = align;
            }

            if (th) {
              // Add data-th attribute for responsive tables
              dataAttrs['data-th'] = escapeQuotes(th);
            }

            return (
              <RichText.Content
                {...dataAttrs}
                className={cellClasses}
                tagName={tag}
                value={content}
                key={cellIndex}
              />
            );
          })}
        </tr>
      ))}
    </Tag>
  );
};

Section.propTypes = {
  type: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      th: PropTypes.string,
      scope: PropTypes.string,
      align: PropTypes.string,
    }),
  ),
};

/**
 * Updates the save element of the `core/table` block. If the table contains
 * a head row, this will add `data-th` to respective body cells in order to
 * achieve responsive tables.
 */
const getSaveElement = (element, blockType, attributes) => {
  const { head, body } = attributes;

  // If no head has been added, return base element
  if (!head.length || !head[0] || !head[0].cells.length) {
    return element;
  }

  // Get text content only (removes styles) from head cells
  const headContent = head[0].cells.map(cell => {
    const temp = document.createElement('span');
    temp.innerHTML = cell.content;
    return temp.textContent;
  });

  // Replace the body section components with the custom one above
  const tableWithHeadAttrs = findAndReplaceElement(
    element,
    el => el.props.type === 'body',
    () => {
      const bodyCells = body.map(row => ({
        ...row,
        cells: row.cells.map((cell, i) => ({
          ...cell,
          // Add respective head cell content to `th` prop
          th: headContent[i],
        })),
      }));

      return <Section type="body" rows={bodyCells} />;
    },
  );

  return tableWithHeadAttrs;
};

export default getSaveElement;

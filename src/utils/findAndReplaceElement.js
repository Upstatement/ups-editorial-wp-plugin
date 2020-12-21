import { Children, cloneElement } from '@wordpress/element';

/**
 * Performs depth-first search to find an element of a given type inside the
 * given element. Provides a callback to manipulate the element.
 *
 * @param {React.ReactNode} element the element to search
 * @param {(element: React.ReactNode) => boolean} match a match function
 * @param {(element: React.ReactNode) => React.ReactNode} callback a callback that
 * is passed the found element, and returns the modified one
 * @returns {React.ReactNode} the modified element
 */
const findAndReplaceElement = (element, match, callback) => {
  // If element doesn't exist, return null
  if (!element) {
    return null;
  }

  // If an element has matched, stop recursing and use callback
  if (match(element)) {
    return callback(element);
  }

  let children;
  if (element.props.children) {
    children = Children.map(element.props.children, child =>
      findAndReplaceElement(child, match, callback),
    );
  }

  // Otherwise, clone the element and recurse with its children
  return cloneElement.apply(null, [element, {}, ...(children ? [children] : [])]);
};

export default findAndReplaceElement;

/**
 * JSX helper function for assigning multiple class names
 * to a component. This will only assign class names that
 * resolve to strings.
 *
 * @example
 * ```jsx
 * <div {...className(s.container, open && s.open)}></div>
 * ```
 *
 * @param {...any} classes the class queries to apply
 * @returns {object} a spreadable object with a single
 * `className` property to apply to a component
 */
const className = (...classes) => ({
  className: classes.filter(className => typeof className === 'string').join(' '),
});

export default className;

/**
 * Utility function for moving an item in an array
 * from one index to another
 *
 * @example
 * ```js
 * move(['beep', 'boop', 'bop'], 1, 2);
 * // ['beep', 'bop', 'boop']
 * ```
 *
 * @param {Array} arr the array to perform the reordering on
 * @param {Int} from the index of the item to move
 * @param {Int} to the index to move the item to
 *
 * @returns {object} a spreadable object with a single
 * `className` property to apply to a component
 */
const move = (originalArr, from, to) => {
  // Make a copy of the original array
  const arr = [...originalArr];

  while (from < 0) {
    from += arr.length;
  }
  while (to < 0) {
    to += arr.length;
  }
  if (to >= arr.length) {
    let k = to - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }

  const itemToInsert = arr.splice(from, 1)[0];
  arr.splice(to, 0, itemToInsert);

  return arr;
};

export default move;

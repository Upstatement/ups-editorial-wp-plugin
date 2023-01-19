/**
 * @template {Record<string, any>} T
 * @typedef {{ [K in keyof T]: K }} KeyEnum
 */

/**
 * Gets an enumeration of a given record/object's keys.
 *
 * @template {Record<string, any>} T
 * @param {T} record the object to create the enumeration from
 * @returns {KeyEnum<T>} the enumeration of the given object's keys
 */
const getEnum = record =>
  Object.keys(record).reduce(
    (acc, key) => ({
      ...acc,
      [key]: key,
    }),
    {},
  );

export default getEnum;

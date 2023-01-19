/**
 * Replaces quotes from a string with an escaped quote for use within HTML. This
 * fixes issues with quotes breaking out of `data-*` attributes.
 *
 * @param {string} value the value to escape quotes from
 * @returns {string} the escaped value
 */
const escapeQuotes = value => (value || '').replace(/"/g, '&quot;');

export default escapeQuotes;

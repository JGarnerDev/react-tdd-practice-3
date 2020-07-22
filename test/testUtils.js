/**
 * returns nodes with the given data-test attribute
 * @function findByTestAttr
 * @param {object} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 */

export default function findByTestAttr (wrapper, val) {
  return wrapper.find(`[data-test="${val}"]`)
}

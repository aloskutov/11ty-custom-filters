/**
 * Wraps string or array items in quotes
 *
 * @param {*} param - value to wrap (string, number, array, etc.)
 * @param {string} [openQuote='"'] - opening quote character(s)
 * @param {string} [closeQuote='"'] - closing quote character(s)
 * @returns {Array<string>|string}
 */
export default (
  param: Array<unknown> | any,
  openQuote: string = '"',
  closeQuote: string = '"'
): Array<string> | string =>
  Array.isArray(param)
    ? param.map((item) => openQuote + String(item) + closeQuote)
    : openQuote + String(param) + closeQuote;

/**
 * Wraps string or array items in quotes
 *
 * @param {*} param - value to wrap (string, number, array, etc.)
 * @param {string} [openQuote='"'] - opening quote character(s)
 * @param {string} [closeQuote='"'] - closing quote character(s)
 * @returns {Array<string>|string}
 */
export default function (param: Array<unknown> | any, openQuote: string = '"', closeQuote: string = '"') {
  if (Array.isArray(param)) {
    return param.map((item) => openQuote + String(item) + closeQuote);
  }

  return openQuote + String(param) + closeQuote;
}

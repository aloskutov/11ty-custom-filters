const locale: string = 'ru-RU';
const options: Intl.PluralRulesOptions = {
  type: 'cardinal',
};
const forms: Record<string, number> = {
  one: 0,
  few: 1,
  many: 2,
  other: 2, // fallback for ru-RU
};
const pr = new Intl.PluralRules(locale, options);

/**
 *
 * @param {number} quantity
 * @param {Array<string>} plurals - ['яблоко', 'яблока', 'яблок']
 * @returns {string}
 */
export default (quantity: number, plurals: Array<string>): string =>
  plurals[forms[pr.select(quantity)] ?? 2];

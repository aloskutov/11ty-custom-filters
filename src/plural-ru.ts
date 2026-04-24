const locale: string = 'ru-RU';
const options: Intl.PluralRulesOptions = {type: 'cardinal'};
const forms: Record<string, number> = {
  zero: 2,
  one: 0,
  two: 1,
  few: 1,
  many: 2,
  other: 2,
};
const pr: Intl.PluralRules = new Intl.PluralRules(locale, options);

/**
 * Plurals
 * @param {number} quantity
 * @param {Array<string>} plurals - ['яблоко', 'яблока', 'яблок']
 * @returns {string}
 */
export default (quantity: number, plurals: Array<string>[3]): string =>
  plurals[forms[pr.select(quantity)]];

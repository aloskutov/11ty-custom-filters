const globalLocale: string = 'ru-RU';
const globalTimeZone: string = 'Asia/Barnaul';
const formatDateOptions: Intl.DateTimeFormatOptions = {
  day: '2-digit',
  year: 'numeric',
  month: '2-digit',
  timeZone: globalTimeZone,
};
const formatDateLongOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: globalTimeZone,
};
const formatDateTimeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  year: 'numeric',
  month: '2-digit',
  timeZone: globalTimeZone,
};
const formatDateTimeLongOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: globalTimeZone,
};

/**
 * Returns Date
 * @param {string|Date} date
 * @returns Date
 */
export const toDate = (date: string | Date = new Date()): Date => {
  return typeof date === 'string' ? new Date(date) : date;
};

/**
 * Returns a formatted date string.
 * @param {string|Date} date
 * @param {string} locale
 * @param {DateFormatOptions} options
 * @returns {string}
 */
export const formatDate = (
  date: string | Date = new Date(),
  locale: string = globalLocale,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const localOptions: Intl.DateTimeFormatOptions = {};

  Object.assign(localOptions, formatDateOptions, options);

  return toDate(date).toLocaleString(locale, localOptions);
};

/**
 * Returns a date string formatted like "Вторник, 7 Ноября 2023 г".
 * @param {string|Date} date
 * @param {string} locale
 * @param {DateFormatOptions} options
 * @returns {string}
 */
export const formatDateLong = (
  date: string | Date = new Date(),
  locale: string = globalLocale,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const localOptions: Intl.DateTimeFormatOptions = {};

  Object.assign(localOptions, formatDateLongOptions, options);

  return formatDate(date, locale, localOptions);
};

/**
 * Returns a date string formatted like "вторник, 7 ноября 2023 г. в 14:41:06'".
 * @param {string|Date} date
 * @param {string} locale
 * @param {DateFormatOptions} options
 * @returns {string}
 */
export const formatDateTimeLong = (
  date: string | Date = new Date(),
  locale: string = globalLocale,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const localOptions: Intl.DateTimeFormatOptions = {};

  Object.assign(localOptions, formatDateTimeLongOptions, options);

  return formatDate(date, locale, localOptions);
};

/**
 * Returns a date string formatted like "dd.mm.yyyy, hh:mm:ss".
 * @param {string|Date} date
 * @returns {string}}
 */
export const formatDateTime = (
  date: string | Date = new Date(),
  locale: string = globalLocale,
  options: Intl.DateTimeFormatOptions = {}
): string => {
  const localOptions: Intl.DateTimeFormatOptions = {};

  Object.assign(localOptions, formatDateTimeOptions, options);

  return toDate(date).toLocaleString(locale, localOptions);
};

/**
 * Returns date string formatted to ISO "yyyy-mm-ddThh:mm:ss.000Z"
 * @param {string|Date} date
 * @returns {string}}
 */
export const formatISO = (date: string | Date = new Date()): string => {
  return toDate(date).toISOString();
};

/**
 * Returns a date string formatted like "yyyy-mm-dd".
 * @param {string | Date} date
 * @param {string} dateSeparator default value '-'
 * @returns {string}
 */
export const formatDateNumeric = (
  date: string | Date = new Date(),
  dateSeparator: string = '-'
) => {
  return formatDateTime(date)
    .split(', ')[0]
    .split('.')
    .reverse()
    .join(dateSeparator);
};

/**
 * Returns a time string formatted like "hh:mm:ss".
 * @param {string | Date} date
 * @returns {string}
 */
export const formatTimeNumeric = (date: string | Date = new Date()) => {
  return formatDateTime(date).split(', ')[1];
};

/**
 * Returns a time string formatted like "yyyy-mm-dd-hhmmss".
 * @param {string | Date} date
 * @returns {string}
 */
export const formatFile = (date: string | Date = new Date()) => {
  return `${formatDateNumeric(date)}-${formatTimeNumeric(date)
    .split(':')
    .join('')}`;
};

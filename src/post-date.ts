const locale: string = 'ru-RU';
const dateOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'Asia/Barnaul',
};
const timeOptions: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'Asia/Barnaul',
};
const currentOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  year: 'numeric',
  month: '2-digit',
};

const w3cDateOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  day: '2-digit',
  year: 'numeric',
  month: '2-digit',
  timeZone: 'Asia/Barnaul',
  timeZoneName: 'longOffset',
};

/**
 * Generated date/time string for post title
 * @param {string} dateString
 * @returns {string}
 */
export const postDate = (dateString: string): string => {
  const date: Date = new Date(dateString);

  const outputDate: string = date.toLocaleString(locale, dateOptions);
  const outputTime: string = date.toLocaleString(locale, timeOptions);

  return `${outputDate} в ${outputTime}`;
};

/**
 * Return current date/time 'YYYY-MM-DD-HHmmss'
 * @returns {string}
 */
export const currentDateTimeString = (): string => {
  const now: Date = new Date();

  const [date, time] = now.toLocaleString(locale, currentOptions).split(', ');
  const [day, month, year] = date.split('.');
  const [hour, minute, second] = time.split(':');

  return `${year}-${month}-${day}-${hour}${minute}${second}`;
};

/**
 * Return date ISO string
 * @param {string} dateString
 * @returns {string}
 */
export const ISODate = (dateString: string): string => {
  const date: Date = new Date(dateString);

  return date.toISOString();
};

/**
 * Return W3C Complete date format YYYY-MM-DD (eg 1997-07-16)
 * @param {string} dateString
 * @returns {string}
 */
export const W3CDateShort = (dateString: string): string => {
  const dt: Date = new Date(dateString);
  const regex = /(\d{2}).(\d{2}).(\d{4})/s;

  const [, day, month, year] = dt
    .toLocaleString(locale, w3cDateOptions)
    .split(regex);

  return `${year}-${month}-${day}`;
};

/**
 * Return W3C complete date plus hours, minutes and seconds format
 * YYYY-MM-DDThh:mm:ssTZD (eg 1997-07-16T19:20:30+01:00)
 * @param {string} dateString
 * @returns {string}
 */
export const W3CDateLong = (dateString: string): string => {
  const dt: Date = new Date(dateString);
  const regex =
    /(\d{2}).(\d{2}).(\d{4}), (\d{2}):(\d{2}):(\d{2}) GMT(\+\d{2}:\d{2})/s;

  const [, day, month, year, hour, minute, second, tz] = dt
    .toLocaleString(locale, w3cDateOptions)
    .split(regex);

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${tz}`;
};

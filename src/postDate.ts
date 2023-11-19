const locale: string = 'ru-RU';
const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: "Asia/Barnaul",
};
const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Asia/Barnaul",
};
const currentOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "2-digit",
    year: "numeric",
    month: "2-digit",
};

/**
 * Generated date/time string for post title
 * @param dateString string
 * @returns string
 */
export const postDate = (dateString: string): string => {
    const date: Date = new Date(dateString);

    const outputDate: string = date.toLocaleString(locale, dateOptions);
    const outputTime: string = date.toLocaleString(locale, timeOptions);

    return `${outputDate} в ${outputTime}`;
};

/**
 * Return current date/time 'YYYY-MM-DD-HHmmss'
 * @returns string
 */
export const currentDateTimeString = (): string => {
    const now: Date = new Date();

    const [date, time] = now.toLocaleString(locale, currentOptions).split(', ');
    const [day, month, year] = date.split('.');
    const [hour, minute, second] = time.split(':');

    return `${year}-${month}-${day}-${hour}${minute}${second}`;
}

export const ISODate = (dateString: string): string => {
    const date: Date = new Date(dateString);

    return date.toISOString();
};
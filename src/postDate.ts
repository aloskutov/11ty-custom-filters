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

/**
 * Generated date/time string for post title
 * @param dateString string
 * @returns string
 */
export const postDate = (dateString: string):string => {
    const date:Date = new Date(dateString);

    const outputDate:string = date.toLocaleString(locale, dateOptions);
    const outputTime:string = date.toLocaleString(locale, timeOptions);

    return `${outputDate} в ${outputTime}`;
};

/**
 * Return current date/time 'YYYY-MM-DD-HHmm'
 * @returns string
 */
export const currentDateTimeString = ():string => {
    const now = new Date();
    const numberFormatter: Intl.NumberFormat = new Intl.NumberFormat(locale, {minimumIntegerDigits: 2});
    const year: number = now.getFullYear();
    const month: number = now.getMonth() + 1;
    const date: string = numberFormatter.format(now.getDate());
    const hours: string = numberFormatter.format(now.getHours());
    const minutes: string = numberFormatter.format(now.getMinutes());

    return `${year}-${month}-${date}-${hours}${minutes}`;
}

export const ISODate = (dateString: string):string => {
    const date:Date = new Date(dateString);

    return date.toISOString();
};
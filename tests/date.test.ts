import {describe, expect, test, jest} from '@jest/globals';
import * as dt from '../src/date';

const date: string = '2023-11-07 14:41:06 +07:00';
const now: string = '2023-11-22 20:08:23 +07:00';
const dateObj: Date = new Date(date);
const nowObj: Date = new Date(now);
const options: Intl.DateTimeFormatOptions = {
  timeZone: 'UTC',
};

describe('Test Dates', () => {
  test('String to Date', () => {
    expect(dt.toDate(date)).toEqual(dateObj);
  });

  test('Date string to Date', () => {
    expect(dt.toDate(new Date(date))).toEqual(dateObj);
  });

  test('Current date to Date', () => {
    jest.useFakeTimers().setSystemTime(new Date(now));
    expect(dt.toDate()).toEqual(nowObj);
  });

  test('Default date format', () => {
    expect(dt.formatDate(date)).toBe('07.11.2023');
  });

  test('Long date format', () => {
    expect(dt.formatDateLong(date)).toBe('вторник, 7 ноября 2023 г.');
  });

  test('Long date time format', () => {
    expect(dt.formatDateTimeLong(date)).toBe(
      'вторник, 7 ноября 2023 г. в 14:41:06'
    );
  });

  test('Long date time format UTC', () => {
    expect(dt.formatDateTimeLong(date, 'en', options)).toBe(
      'Tuesday, November 7, 2023 at 07:41:06 AM'
    );
  });

  test('Long date time format now', () => {
    jest.useFakeTimers().setSystemTime(new Date(now));
    expect(dt.formatDateTimeLong()).toBe('среда, 22 ноября 2023 г. в 20:08:23');
  });

  test('Local date time format', () => {
    expect(dt.formatDateTime(date)).toBe('07.11.2023, 14:41:06');
  });

  test('Numeric date', () => {
    expect(dt.formatDateNumeric(date)).toBe('2023-11-07');
  });

  test('Numeric time', () => {
    expect(dt.formatTimeNumeric(date)).toBe('14:41:06');
  });

  test('ISO date format with string', () => {
    expect(dt.formatISO(date)).toBe('2023-11-07T07:41:06.000Z');
  });

  test('file format with string', () => {
    expect(dt.formatFile(date)).toBe('2023-11-07-144106');
  });
});

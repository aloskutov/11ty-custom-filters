import {describe, expect, test, jest} from '@jest/globals';
import {postDate, currentDateTimeString, ISODate} from '../src/postDate';

const dateString: string = '2023-11-07 14:41:06 +07:00';

describe('Test Dates', () => {
  test('postDate', () => {
    expect(postDate(dateString)).toBe('вторник, 7 ноября 2023 г. в 14:41');
  });

  test('currentDateTimeString', () => {
    jest.useFakeTimers().setSystemTime(new Date(dateString));
    expect(currentDateTimeString()).toBe('2023-11-07-144106');
  });

  test('ISODate', () => {
    expect(ISODate(dateString)).toBe('2023-11-07T07:41:06.000Z');
  });
});

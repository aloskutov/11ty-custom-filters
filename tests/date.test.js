import { test, mock } from 'node:test';
import assert from 'node:assert';
import * as dt from '../dist/date.js';

const date = '2023-11-07 14:41:06 +07:00';
const now = '2023-11-22 20:08:23 +07:00';
const nowUT = new Date(now).getTime();
const dateObj = new Date(date);
const nowObj = new Date(now);
const options = { timeZone: 'UTC' };

test('Test Dates', () => {
  mock.timers.enable({ apis: ['Date'], now: nowUT });

  test.it('String to Date', () => {
    assert.deepEqual(dt.toDate(date), dateObj);
  });

  test.it('Date string to Date', () => {
    assert.deepEqual(dt.toDate(new Date(date)), dateObj);
  });

  test.it('Current date to Date', () => {
    assert.deepEqual(dt.toDate(), nowObj);
  });

  test.it('Default date format', () => {
    assert.equal(dt.formatDate(date), '07.11.2023');
  });

  test.it('Long date format', () => {
    assert.equal(dt.formatDateLong(date), 'вторник, 7 ноября 2023 г.');
  });

  test.it('Long date time format', () => {
    assert.equal(
      dt.formatDateTimeLong(date),
      'вторник, 7 ноября 2023 г. в 14:41:06'
    );
  });

  test.it('Long date time format UTC', () => {
    assert.equal(
      dt.formatDateTimeLong(date, 'en', options),
      'Tuesday, November 7, 2023 at 07:41:06 AM'
    );
  });

  test.it('Long date time format now', () => {
    assert.equal(
      dt.formatDateTimeLong(),
      'среда, 22 ноября 2023 г. в 20:08:23'
    );
  });

  test.it('Local date time format', () => {
    assert.equal(dt.formatDateTime(date), '07.11.2023, 14:41:06');
  });

  test.it('Numeric date', () => {
    assert.equal(dt.formatDateNumeric(date), '2023-11-07');
  });

  test.it('Numeric time', () => {
    assert.equal(dt.formatTimeNumeric(date), '14:41:06');
  });

  test.it('ISO date format with string', () => {
    assert.equal(dt.formatISO(date), '2023-11-07T07:41:06.000Z');
  });

  test.it('file format with string', () => {
    assert.equal(dt.formatFile(date), '2023-11-07-144106');
  });
});

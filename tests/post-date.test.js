import {test, mock} from 'node:test';
import assert from 'node:assert';
import * as pd from '../dist/post-date.js';

const dateString = '2023-11-07 14:41:06 +07:00';
const unixTime = new Date(dateString).getTime();

test('Test Dates', () => {
  mock.timers.enable({apis: ['Date'], now: unixTime});

  test.it('postDate', () => {
    assert.equal(pd.postDate(dateString), 'вторник, 7 ноября 2023 г. в 14:41');
  });

  test.it('currentDateTimeString', () => {
    assert.equal(pd.currentDateTimeString(), '2023-11-07-144106');
  });

  test.it('ISODate', () => {
    assert.equal(pd.ISODate(dateString), '2023-11-07T07:41:06.000Z');
  });

  test.it('W3CDateShort', () => {
    assert.equal(pd.W3CDateShort(dateString), '2023-11-07');
  });

  test.it('W3CDateLong', () => {
    assert.equal(pd.W3CDateLong(dateString), '2023-11-07T14:41:06+07:00');
  });
});

import test from 'node:test';
import assert from 'node:assert';
import {limit} from '../dist/limit.js';

test('Test filter limit', (t) => {
  test.it('limit', () => {
    const testArr = new Array(15).fill('test');
    assert.equal(limit(testArr, 10).length, 10);
  });
});

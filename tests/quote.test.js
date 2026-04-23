import test from 'node:test';
import assert from 'node:assert';
import quote from '../dist/quote.js';

const testString = 'test string';
const expectString = '"test string"';
const testArray = [1, 2, 3, 4, 5, 5, 6, 7, 8];
const expectArray = ['"1"', '"2"', '"3"', '"4"', '"5"', '"5"', '"6"', '"7"', '"8"'];

test('Test filter quote', (t) => {
  test.it('Quote string', () => {
    assert.equal(quote(testString), expectString);
  });

    test.it('Quote array of numbers', () => {
    assert.deepEqual(quote(testArray), expectArray);
  });
});

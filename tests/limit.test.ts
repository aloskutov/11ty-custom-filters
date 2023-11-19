import {describe, expect, test} from '@jest/globals';
import {limit} from '../src/limit';

describe('Test filter limit', () => {
  test('limit', () => {
    const testArr: string[] = new Array<string>(15).fill('test');
    expect(limit(testArr, 10).length).toBe(10);
  });
});

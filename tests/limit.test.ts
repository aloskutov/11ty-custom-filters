import {describe, expect, test} from '@jest/globals';
import {limit} from '../src/limit';

describe('Test filter limit', () => {
    test('limit', () => {
        const testArr = new Array(15).fill('test');
        expect(limit(testArr, 10).length).toBe(10);
    });
});
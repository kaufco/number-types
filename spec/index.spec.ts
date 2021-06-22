import { int, long, float, double } from '../lib';

describe('Test Suite', () => {
    it('int', () => {
        const i: int = 3;
        const l: long = 2n;
        const f: float = 3;
        const d: double = 3;
        expect(typeof i).toBe('number');
        expect(typeof l).toBe('bigint');
        expect(typeof f).toBe('number');
        expect(typeof d).toBe('number');
    });
});

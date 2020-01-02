import func from './courseValue';

describe('Our first test', () => {
    test('should pass', () => {
        const val = func(1000);
        expect(val).toBe('$1000.0');
    });
});

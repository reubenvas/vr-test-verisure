import getIPv4Adress from './getIPv4Adress';

describe('get IPv4Adress function', () => {
    test('should not return local IP or null', () => {
        const ip = getIPv4Adress();
        expect(ip).not.toBe('127.0.0.1');
        expect(ip).not.toBe(null);
    });
});

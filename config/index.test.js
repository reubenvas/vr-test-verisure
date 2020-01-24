const initEnvVars = require('./index');

describe.only('Initialize environment variables (locally)', () => {
    afterAll(() => {
        process.env.NODE_ENV = 'test';
    });

    test('should be configured for dev or prod depending on environment', () => {
        initEnvVars();
        switch (process.env.NODE_ENV) {
        case 'production':
            expect(process.env.TEST_GREETING).toBe('Tjena_prod'); // prod env
            break;
        case 'development':
            expect(process.env.TEST_GREETING).toBe('Tjena_dev'); // dev env
            break;
        case 'test':
            expect(process.env.TEST_GREETING).toBe('Tjena_dev'); // dev env
            break;
        default:
            fail(new Error('The env variables seem to be configured incorrectly')); // eslint-disable-line no-undef
        }
    });
});

import dotenv from 'dotenv';

export default () => { // name: initEnvVars
    const isDevelopment = process.env.NODE_ENV !== 'production';

    const result = dotenv.config({
        path: `./config/.env.${isDevelopment ? 'dev' : 'prod'}`,
    });
    if (result.error) {
        throw result.error;
    }
    const { parsed: envs } = result;
    return {
        endpoint: envs.API_URL,
        masterKey: envs.API_KEY,
        port: envs.PORT,
        greeting: envs.TEST_GREETING,
    };
};

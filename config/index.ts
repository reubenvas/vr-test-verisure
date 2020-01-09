import dotenv from 'dotenv';
import { exec } from 'child_process';

type envVars = {
    endpoint: string;
    masterKey: string;
    port: string;
    greeting: string;
}

export default (): envVars => { // name: initEnvVars
    const isDevelopment = process.env.NODE_ENV !== 'production';

    const result = dotenv.config({
        path: `./config/.env.${isDevelopment ? 'dev' : 'prod'}`,
    });
    if (result.error || !process.env.TEST_GREETING) {
        try {
            exec('heroku-setEnvVariables', (err) => {
                if (err) throw err;
            });
        } catch (err) {
            console.error('MISSING A .env FILE. SEE ERRROR MESSAGE BELOW'); // eslint-disable-line no-console
            console.trace(); // eslint-disable-line no-console
            throw result.error;
        }
    }
    const { parsed: envs } = result;
    return {
        endpoint: envs.API_URL,
        masterKey: envs.API_KEY,
        port: envs.PORT,
        greeting: envs.TEST_GREETING,
    };
};

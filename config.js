import dotenv from 'dotenv';

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const result = dotenv.config({
    path: `./.env.${env}`,
});
if (result.error) {
    throw result.error;
}
const { parsed: envs } = result;
export default {
    endpoint: envs.API_URL,
    masterKey: envs.API_KEY,
    port: envs.PORT,
    greeting: envs.TEST_GREETING,
};

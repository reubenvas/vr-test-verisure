// eslint-disable-next-line @typescript-eslint/no-var-requires
// const dotenv = require('dotenv');
/*
type envVars = {
    endpoint?: string;
    masterKey?: string;
    port?: string;
    greeting?: string;
} */

const initEnvVars = ()/* : envVars */ => { // name: initEnvVars
    // eslint-disable-next-line global-require
    const dotenv = require('dotenv');
    const isProduction = process.env.NODE_ENV === 'production';
    const result = dotenv.config({
        path: `./config/.env.${isProduction ? 'prod' : 'dev'}`,
    });
    if (result.error && !process.env.TEST_GREETING) {
        console.error('MISSING A .env FILE. SEE ERRROR MESSAGE BELOW'); // eslint-disable-line no-console
        console.error("If building for Heroku, run --  heroku config:set $(cat config/.env.prod | sed '/^$/d; /#[[:print:]]*$/d')"); // eslint-disable-line no-console
        console.trace(); // eslint-disable-line no-console
        throw result.error;
    }
    return {
        endpoint: process.env.API_URL,
        masterKey: process.env.API_KEY,
        port: process.env.PORT,
        greeting: process.env.TEST_GREETING,
    };
};

/* export default initEnvVars; */
module.exports = initEnvVars;

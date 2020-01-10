/* eslint-disable no-unused-vars */
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import initEnvVars from './config';

initEnvVars();
/* console.log(process.env);
 */const { API_KEY, API_URL, TEST_GREETING } = process.env;


const variabel = new Dotenv({
    // ENV VARs are not loaded to client.
    // Since the .env.prod file is gitignored, it can't be found
    // when pushing to Heroku and cannot be found by this plugin.
    path: `./config/.env.${process.env.NODE_ENV === 'production' ? 'prod' : 'devv'}`,
});

console.log(Object.keys(variabel.definitions).length);


const newVar = new webpack.EnvironmentPlugin({
    API_KEY, API_URL, TEST_GREETING,
});
// vad är detta, det ska ju vara EnvironmentPlugin... Kolla upp detta

console.log(newVar);

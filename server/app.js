// app.js and server.js are together the same file as buildScripts/srcServer.js

import express from 'express';
import { join } from 'path';

import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';

import config from '../webpack.config.dev';
import initEnvVars from '../config'; // for environment variables

// in development we have to initialize the local env variables ourselves
initEnvVars();

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../src/index.html'));
});

app.get('/api/users', (req, res) => {
    res.json([{
        id: 81413519,
        firstName: 'Tina',
        lastName: 'Renner',
        email: 'Nathaniel_Rippin@yahoo.com',
    },
    {
        id: 44568811,
        firstName: 'Glen',
        lastName: 'Hilpert',
        email: 'Gracie_Sauer13@gmail.com',
    },
    {
        id: 31923398,
        firstName: 'Dejon',
        lastName: 'Halvorson',
        email: 'Nickolas.Koepp@hotmail.com',
    },
    ]);
});

export default app;

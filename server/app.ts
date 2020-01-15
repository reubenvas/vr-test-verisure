// app.js and server.js are together the same file as buildScripts/srcServer.js

import express from 'express';
import { join } from 'path';

/* import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware'; */

const app: express.Application = express();

if (process.env.NODE_ENV === 'development') {
    Promise.all([
        import('webpack'),
        import('webpack-dev-middleware'),
        import('../webpack.config.dev.babel'),
        import('../config'),
    ]).then(([webpack, webpackDevMiddleWare, config, initEnvVars]) => {
        // in development we have to initialize the local env variables ourselves
        initEnvVars();

        const compiler = webpack(config);

        app.use(webpackDevMiddleWare(compiler, {
            noInfo: true,
            publicPath: config.output.publicPath,
        }));
    });
}

/* import config from '../webpack.config.dev.babel';
import initEnvVars from '../config'; // for environment variables */


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

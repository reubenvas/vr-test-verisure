import express from 'express';
import { join } from 'path';
// import open from 'open';

import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';

import config from '../webpack.config.dev';
import initEnvVars from '../config'; // for environment variables

import getIPv4Adress from './helpers/getIPv4Adress';

initEnvVars();

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
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

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log('Running on port:', PORT); // eslint-disable-line no-console

    const ipAdress = getIPv4Adress();
    console.log(`\nGo to http://localhost:${PORT}/ or http://${ipAdress}:${PORT}/\n`); // eslint-disable-line no-console

    // open(`http://localhost:${PORT}`);
});


// tools to expose the local app publically, SHARINGWORK-IN-PROGRESS
// * localtunnel - verkar jäkligt easy, punch a whole in your firewall --verkar inte funka här
// * ngrok - som localtunnel fast med lösenordsskydd
// * now - man kan ladda upp vilket direcxtory som helst bara det finns en package.json
// eslint-disable-next-line max-len
// * Surge - som now men supportar bara static files, men är jäkligt simpelt. Inte som localtunnel utan man hostar filer på ett public URL

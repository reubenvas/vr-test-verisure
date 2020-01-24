import express from 'express';
import { join } from 'path';
import compression from 'compression';

import devAddOns from './helpers/developmentAddOns';
import initEnvVars from '../../config/index';

const app/* : express.Application */ = express();
let directory = '';

// Optimize for production: https://expressjs.com/en/advanced/best-practice-performance.html


if (process.env.NODE_ENV === 'development') {
    console.log('from dev in app');
    devAddOns(app);
    // The problem which causes it to not work is this dynamic import. Don't know why though
    // In production an error will occur when importing developmentAddOns statically
    // import('./helpers/developmentAddOns')
    // .then((devAddOns) => devAddOns.default(app)).catch(err => console.error(err));
    directory = 'src';
} else {
    // This is NOT for actual production use.
    // Just useful for hosting the minified
    // production build for local debugging prusposes.
    app.use(compression());
    app.use(express.static('client/dist'));
    directory = 'dist';
}

if (!process.env.TEST_GREETING) {
    process.env.NODE_ENV = 'production';
    initEnvVars();
}

console.log('This is the NODE_ENV:', process.env.NODE_ENV);


app.get('/', (req, res) => {
    res.sendFile(join(__dirname, `../../client/${directory}/index.html`));
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

// tools to expose the local app publically, SHARINGWORK-IN-PROGRESS
// * localtunnel - verkar jäkligt easy, punch a whole in your firewall --verkar inte funka här
// * ngrok - som localtunnel fast med lösenordsskydd
// * now - man kan ladda upp vilket direcxtory som helst bara det finns en package.json
// eslint-disable-next-line max-len
// * Surge - som now men supportar bara static files, men är jäkligt simpelt. Inte som localtunnel utan man hostar filer på ett public URL

export default app;

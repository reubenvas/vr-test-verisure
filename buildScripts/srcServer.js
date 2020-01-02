import express from 'express';
import { join } from 'path';
import open from 'open';

import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';

import config from '../webpack.config.dev';

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

app.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Running on port:', PORT);
    open(`http://localhost:${PORT}`);
});

// tools to expose the local app publically, SHARINGWORK-IN-PROGRESS
// * localtunnel - verkar jäkligt easy, punch a whole in your firewall --verkar inte funka här
// * ngrok - som localtunnel fast med lösenordsskydd
// * now - man kan ladda upp vilket direcxtory som helst bara det finns en package.json
// eslint-disable-next-line max-len
// * Surge - som now men supportar bara static files, men är jäkligt simpelt. Inte som localtunnel utan man hostar filer på ett public URL

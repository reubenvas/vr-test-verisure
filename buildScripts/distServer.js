import express from 'express';
import { join } from 'path';
import open from 'open';
import compression from 'compression';

const PORT = process.env.PORT || 3000;
const app = express();

// This is NOT for actual production use.
// Just useful for hosting the minified
// production build for local debugging prusposes.
app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
});

app.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('Running on port:', PORT);
    console.log('greetings from env-variables:', process.env.TEST_GREETING);
    open(`http://localhost:${PORT}`);
});

// tools to expose the local app publically, SHARINGWORK-IN-PROGRESS
// * localtunnel - verkar jäkligt easy, punch a whole in your firewall --verkar inte funka här
// * ngrok - som localtunnel fast med lösenordsskydd
// * now - man kan ladda upp vilket direcxtory som helst bara det finns en package.json
// eslint-disable-next-line max-len
// * Surge - som now men supportar bara static files, men är jäkligt simpelt. Inte som localtunnel utan man hostar filer på ett public URL

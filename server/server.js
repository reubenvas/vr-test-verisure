import app from './app';
// import open from 'open';

import getIPv4Adress from './helpers/getIPv4Adress';

const PORT = process.env.PORT || 3000;

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

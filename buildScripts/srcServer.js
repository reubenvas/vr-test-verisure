const express = require('express');
const path = require('path');
const open = require('open');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('Running on port:', PORT);
    open('http://localhost:' + PORT);
});

// tools to expose the local app publically, SHARINGWORK-IN-PROGRESS
// * localtunnel - verkar jäkligt easy, punch a whole in your firewall
// * ngrok - som localtunnel fast med lösenordsskydd
// * now - man kan ladda upp vilket direcxtory som helst bara det finns en package.json
// * Surge - som now men supportar bara static files, men är jäkligt simpelt. Inte som localtunnel utan man hostar filer på ett public URL

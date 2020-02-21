import app from './app';
import getIPv4Adress from './helpers/getIPv4Adress';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log('Node app is running on port:', PORT); // eslint-disable-line no-console
    console.log(`\nGo to http://localhost:${PORT}/ or http://${getIPv4Adress()}:${PORT}/\n`); // eslint-disable-line no-console
});

import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) throw err;

    console.log('Node app is running on port:', PORT); // eslint-disable-line no-console
});

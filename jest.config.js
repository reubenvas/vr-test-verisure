module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
};

// Register Babel to transpile before our tests run
require('@babel/register')(); // tveksamt om detta ens funkar

// Disable Webpack features that Mocha doesn't understand
require.extensions['.css'] = () => (null);

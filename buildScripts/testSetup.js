/* eslint-disable @typescript-eslint/no-var-requires */

// This file isn't transpiled, so must use CommonJS and ES5

// Register Babel to transpile before our tests run
require('@babel/register')();

require.extensions['.css'] = () => null;

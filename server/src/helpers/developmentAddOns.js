/**
 * Adds development addons to app
 * - Initializes Env Vars.
 * - Adds WebpackDevMiddleWare to compile client side React code
 * @typedef {{app: Express.Application}}
 * @param {Express.Application} app - generated by the function express()
 */
export default async (app) => {
    /*     eslint-disable global-require */
    const webpack = require('webpack');
    const webpackDevMiddleWare = require('webpack-dev-middleware');
    const config = require('../../../webpack.config.dev.babel');
    const initEnvVars = require('../../../config');
    /*     eslint-enable global-require */

    // const webpack = (await import('webpack')).default;
    // const webpackDevMiddleWare = (await import('webpack-dev-middleware')).default;
    // const config = (await import('../../../webpack.config.dev.babel')).default;
    // const initEnvVars = (await import('../../../config')).default;

    // in development we have to initialize the local env variables ourselves
    initEnvVars();

    const compiler = webpack(config);

    app.use(webpackDevMiddleWare(compiler, {
        publicPath: config.output.publicPath,
    }));
};

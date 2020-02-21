/* eslint-disable no-console */
import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../webpack.config.prod';

// process.env.NODE_ENV = 'production';


console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((error, stats) => {
    if (error) { // so a fatal errror occured... Stop here!
        console.error(chalk.red(error));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (stats.hasErrors) {
        jsonStats.errors.forEach((err) => console.error(chalk.red(err)));
        return null;
    }

    if (stats.hasWarnings) {
        console.warn(chalk.yellow('Webpack generated the following warnings: '));
        jsonStats.warnings.forEach((wrn) => console.warn(chalk.yellow(wrn)));
    }

    console.log(`Webpack stats: ${stats}`);


    // If we got this far, the build succeeded.
    console.log(chalk.green('Your app has been built for production and written to "/dist"'));

    return 0;
});

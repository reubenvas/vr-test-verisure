// import the path package, as we are using babel,
// 'require' is changed to 'import from'
import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';


// Webpack is configured by 'export'ing an object
export default {
    // 'debug' was removed in webpack 2.0.0
    // debug: true,
    // 'devtool' has been set to inline-source-map, source-map ones are for higher quality
    devtool: 'source-map',
    // Setting 'noInfo' to false means that Webpack will display the list of all the files
    // that it is bundling. Best to set this to TRUE during PROD, as it adds a lot of noise
    // noInfo, not available for webpack 2.0.0 or higher
    // noInfo: false,

    // The 'mode' option has not been set, webpack will fallback to 'production' for this value.
    // Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    // You can also set it to 'none' to disable any default behavior.
    // Learn more: https://webpack.js.org/concepts/mode/
    mode: 'production',

    // This is the entry point of the Webpack
    entry: {
        // Not doing a hot-reloading at this point and just keeping it simple to the SRC/Index
        // using __dirname, which is part of node.js, which will give the full path here.
        // also using the 'path' package, which also comes with node.js and has been imported above
        // some_file_name: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index.ts'),
    },

    // The target of the Webpack bundle for our current purpose is the web.
    // It could also be 'node', or 'elektron' for desktop apps
    target: 'web',

    // This informs Webpack, where it should create the DEV bundle.
    // Webpack in the current code does not actually create the physical files,
    // but will serve the build from memory.
    // But while definig the output, the path and file names are specified to Webpack
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js', // [name] is a placeholder - webpack will use what's defined in the entry point
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx',
        ],
    },

    // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
    plugins: [
        // Use CommonChunkPlugin to create a separate bundle
        // of vendor libraries os that they're cached separetly.
        // new webpack.SplitChunksPlugin({
        //     name: 'vendor', // has to be the same as in config.entry
        // }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
        // Eliminate duplicate packages when generating bundle
        // new webpack.optimize.DedupePlugin(),
        // Minify JS
        // new UglifyJsPlugin({
        //     compress:
        //     {
        //         warnings: true,
        //     },
        //     sourceMap: true,
        // }),
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
            },
        }),
        // Makes sure the environment variables is available in the window
        new Dotenv({
            path: `./config/.env.${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}`,
        }),
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            // new UglifyJsPlugin({
            //     cache: true,
            //     parallel: true,
            //     uglifyOptions: {
            //         compress: false,
            //         ecma: 6,
            //         mangle: true,
            //     },
            //     sourceMap: true,
            // }),
        ],
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,

                // vendor chunk
                vendor: {
                    // name of the chunk
                    name: 'vendor',
                    // sync + async chunks
                    chunks: 'all',
                    // import file path containing node_modules
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },


    // This informs Webpack about the file types that we wish to handle
    module: {
        // 'rules' informs Webpack how to handle different file types, it is the new 'loaders'
        rules: [{
            // include .js files
            // we are asking it to handle .JS files
            test: /\.jsx?$/,
            // preload the jshint loader
            enforce: 'pre',
            // exclude any and all files in the node_modules folder
            exclude: /node_modules/,
            // USe the babel loader. With webpack 2.0.0,
            // the -loader suffix is not allowed to be omitted
            loaders: ['babel-loader'],
        },
        {
            // also, it is handling the .CSS files for us.
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'],
        },
        {
            test: /\.tsx?$/,
            loader: ['ts-loader'],
        },
        ],
    },
};

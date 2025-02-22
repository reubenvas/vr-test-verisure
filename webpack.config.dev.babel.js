// import the path package, as we are using babel,
// 'require' is changed to 'import from'

// import path from 'path';
// import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Webpack is configured by 'export'ing an object
const config = {
    // 'debug' was removed in webpack 2.0.0
    // debug: true,
    // 'devtool' has been set to inline-source-map, source-map ones are for higher quality
    devtool: 'inline-source-map',
    // Setting 'noInfo' to false means that Webpack will display the list of all the files
    // that it is bundling. Best to set this to TRUE during PROD, as it adds a lot of noise
    // noInfo, not available for webpack 2.0.0 or higher
    // noInfo: false,

    // The 'mode' option has not been set, webpack will fallback to 'production' for this value.
    // Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
    // You can also set it to 'none' to disable any default behavior.
    // Learn more: https://webpack.js.org/concepts/mode/
    mode: 'development',

    // This is the entry point of the Webpack
    entry: [
        'webpack-hot-middleware/client?reload=true',
        // Not doing a hot-reloading at this point and just keeping it simple to the SRC/Index
        // using __dirname, which is part of node.js, which will give the full path here.
        // also using the 'path' package, which also comes with node.js and has been imported above
        path.resolve(__dirname, 'client/src/index.js'),
    ],

    // The target of the Webpack bundle for our current purpose is the web.
    // It could also be 'node', or 'elektron' for desktop apps
    target: 'web',
    stats: {
        excludeAssets: [
            'backstop_data',
        ],
    },

    // This informs Webpack, where it should create the DEV bundle.
    // Webpack in the current code does not actually create the physical files,
    // but will serve the build from memory.
    // But while definig the output, the path and file names are specified to Webpack
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx',
        ],
    },

    // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
    plugins: [
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'client/src/index.html',
            inject: true,
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css',
        }),
        // For hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],

    // This informs Webpack about the file types that we wish to handle
    module: {
        // 'rules' informs Webpack how to handle different file types, it is the new 'loaders'
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
                    // exclude: /node_modules/,
                },
            },
            {
                test: /\.(s(c|a)ss|css)$/,
                // exclude: /node_modules/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[path][name]__[local]___[hash:base64:5]',
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                loader: ['ts-loader'],
            },
        ],
    },
};

// export default config;
module.exports = config;

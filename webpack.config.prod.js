// import the path package, as we are using babel,
// 'require' is changed to 'import from'
import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
        main: path.resolve(__dirname, 'client/src/index.js'),
    },

    // The target of the Webpack bundle for our current purpose is the web.
    // It could also be 'node', or 'elektron' for desktop apps
    target: 'web',

    // This informs Webpack, where it should create the DEV bundle.
    // Webpack in the current code does not actually create the physical files,
    // but will serve the build from memory.
    // But while definig the output, the path and file names are specified to Webpack
    output: {
        path: path.resolve(__dirname, 'client/dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js', // [name] is a placeholder - webpack will use what's defined in the entry point
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx',
        ],
    },

    // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
    plugins: [
        // Generate an external css file with a hash in the filename
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        // Use CommonChunkPlugin to create a separate bundle
        // of vendor libraries os that they're cached separetly.
        // new webpack.SplitChunksPlugin({
        //     name: 'vendor', // has to be the same as in config.entry
        // }),
        // Create HTML file that includes reference to bundled JS.
        new HtmlWebpackPlugin({
            template: 'client/src/index.html',
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
            trackJSToken: 'input-track-js-token-here',
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
        (() => {
            const definePluginObj = new Dotenv({
                path: `./config/.env.${process.env.NODE_ENV === 'production' ? 'prod' : 'dev'}`,
            });
            if (Object.keys(definePluginObj.definitions).length === 0
                && process.env.TEST_GREETING) {
                return new webpack.EnvironmentPlugin({
                    API_KEY: process.env.API_KEY,
                    API_URL: process.env.API_URL,
                    TEST_GREETING: process.env.TEST_GREETING,
                });
            }
            if (Object.keys(definePluginObj.definitions).length === 0) {
                throw new Error("Couldn't find any .env.* file and didn't find any environment variables.");
            }
            return definePluginObj;
        })(),
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
                    // priority
                    priority: 20,
                },

                // common chunk
                common: {
                    name: 'common',
                    // any imported modules which don’t fall inside vendor chunk will be a part of
                    // common chunk if they are shared between at least 2 chunks (sync or async
                    // because of all value of chunks). minChunks tells SplitChunksPlugin to only
                    // inject module inside common chunk if and only if they are shared between at
                    // least 2 chunks (sync or async because of all value of chunks).
                    // https://itnext.io/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312
                    minChunks: 2,
                    chunks: 'all',
                    priority: 10,
                    reuseExistingChunk: true,
                    // enforce: true,
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
            test: /\.js$/,
            // preload the jshint loader
            enforce: 'pre',
            // exclude any and all files in the node_modules folder
            exclude: /node_modules/,
            // USe the babel loader. With webpack 2.0.0,
            // the -loader suffix is not allowed to be omitted
            loaders: ['babel-loader'],
        },
        {
            test: /\.jsx$/,
            use: {
                loader: 'babel-loader',
                options: { presets: ['@babel/preset-react', '@babel/preset-env'] },
            },
        },
        {
            test: /\.s?(c|a)ss$/,
            exclude: /node_modules/,
            loaders: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        // modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[local]___[hash:base64:5]',
                        },
                    },
                },
                'sass-loader',
            ],
        },
        // {
        //     test: /\.css$/i,
        //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
        // },
        // {
        //     test: /\.scss/,
        //     // Note that postcss loader must come before sass-loader
        //     use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader',
        //     'postcss-loader', 'sass-loader'],
        // },
        {
            test: /\.tsx?$/,
            loader: ['ts-loader'],
        },
        ],
    },
};

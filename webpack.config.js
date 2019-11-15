const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const path = require('path');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production';
    const options = {
        mode: argv.mode,
        entry: path.resolve(__dirname, './src/index.ts'),
        // A issue to active the socket to run the --hot
        output: {
            filename: 'main.[hash].js',
            chunkFilename: 'chunk-[id].js'
        },
        optimization: {
            minimize: false
        },
        devtool: '#eval-source-map',
        devServer: {
            stats: "minimal",
            contentBase: __dirname,
            historyApiFallback: true,
            noInfo: false
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve(__dirname, './src')
            }
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        'vue-style-loader',
                        'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {},
                    }],
                }
            ]
        },
        performance: {
            hints: false
        },
        plugins: [
            new CleanWebpackPlugin(),
            new VueLoaderPlugin(),
            new HTMLWebpackPlugin({
                title: "Template",
                template: path.resolve(__dirname, './public/index.html')
            })
        ]
    }
    if (isProd) {
        options.optimization = {
            minimize: true,
            minimizer: [new UglifyJsPlugin()],
        };
    }
    return options
}
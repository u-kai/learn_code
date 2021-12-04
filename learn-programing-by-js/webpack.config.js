//const HtmlWebpackPlugin = require('html-webpack-plugin')

//const Dotenv = require('dotnenv-webpack')

const path = require('path')
module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        bundle: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    //devServer: {
    //watchFiles: [path.join(__dirname, 'dist')],
    //open: true,
    //},
    module: {
        rules: [
            {
                test: /\.(ts)$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    //   plugins: [new HtmlWebpackPlugin(), new Dotenv()],
}

const path = require('path');
const MiniCssExtractPLugin = require('mini-css-extract-plugin');

module.exports = {
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    devServer:{
        port: 3100,
        watchContentBase: false,
    },
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPLugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[new MiniCssExtractPLugin()],
};
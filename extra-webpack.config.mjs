import path from 'node:path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    entry: './src/main.ts',
    output: {
        path: path.resolve(import.meta.dirname, 'dist/static/js/'),
        publicPath: 'auto'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '../css/[name].[contenthash].css'
        })
    ]
};

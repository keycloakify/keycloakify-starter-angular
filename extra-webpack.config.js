import path from 'node:path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('webpack').Configuration} */
export default {
  entry: './src/main.ts',
  output: {
    path: path.resolve(import.meta.dirname, 'build/static/js/'),
    publicPath: 'auto',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css',
    }),
  ],
};

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build/static/js/'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css',
    }),
  ],
};

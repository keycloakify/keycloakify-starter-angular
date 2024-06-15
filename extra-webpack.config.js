const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build/static/js/')
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].[contenthash].css',
    }),
  ],
};

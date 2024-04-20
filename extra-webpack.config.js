const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build/static/js/'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean:true,

  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../fonts',


            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../static/media',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    before: function(app, server, compiler) {
      console.log('Webpack DevServer is running');
    },
    static: {
      directory: path.resolve(__dirname, 'build/static'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    port: 3001,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({

      filename: '../css/[name].[contenthash].css',
    }),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify("/"),
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/assets', to: '../media' },
      ],
    }),
  ],
};

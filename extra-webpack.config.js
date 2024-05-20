const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { DefinePlugin } = webpack;
const fs = require('fs');

class AssetManifestPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Asset Manifest Plugin', (stats) => {
      const assetManifest = {};

      for (const assetName in stats.compilation.assets) {
        const assetInfo = stats.compilation.assets[assetName];
        if (assetName.startsWith('static/js')) {
          const relativePath = path.relative(compiler.options.output.path, assetInfo.existsAt);
          assetManifest[relativePath] = '/' + relativePath;
        }
      }

      fs.writeFileSync(
        path.join(compiler.options.output.path, '../../asset-manifest.json'),
        JSON.stringify(assetManifest, null, 2)
      );
    });
  }
}

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'build/static/js/'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean:true,

  },
  optimization: {
    "splitChunks": {
      chunks: 'all',
    },
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: '../styles/[name].[contenthash].css',
    }),
    new DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('/'),
    }),
    // ...
  ],
};

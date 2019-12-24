const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const glob = require("glob");
const webpack = require('webpack');

module.exports = {
  entry: [].concat.apply([], [
    './spec/runner.js',
  ]),
  output: {
    path: path.resolve(__dirname, "test-dist"),
    filename: "test_index.js",
  },
  target: 'web', mode: "development",
  plugins: [
    new CopyWebpackPlugin(['test.html']),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ],
  module: {
    rules: [{
      include: [
        path.resolve(__dirname, "js")
      ],
    },
    {
      test: /\.js$/,
      exclude: ["/node_modules/"],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-syntax-dynamic-import']
        }
      }
    },
    {
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    {
      test: /\.(scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /spec\.js$/,
      use: 'mocha-loader',
      exclude: /node_modules/
    }]
  },
  node: {
    fs: 'empty'
  },
};

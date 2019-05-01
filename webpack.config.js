'use strict'
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname,'assets'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
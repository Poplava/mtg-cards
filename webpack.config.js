var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    root: path.resolve('./client')
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(eot|png|jpg|svg|woff|woff2|ttf)(\?.*)?$/,
      loader: 'file'
    }]
  }
};

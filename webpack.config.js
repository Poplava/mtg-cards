var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    root: path.resolve('./client'),
    modulesDirectories: ['node_modules', 'client/components']
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
      loader: 'style!css?modules&localIdentName=IP-[name]__[local]!less'
    }, {
      test: /\.css/,
      loader: 'style!css?modules&localIdentName=IP-[name]__[local]'
    }, {
      test: /\.(eot|png|jpg|svg|woff|woff2|ttf)(\?.*)?$/,
      loader: 'file'
    }]
  }
};

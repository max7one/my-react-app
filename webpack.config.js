var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
   extensions: ['', '.js', '.jsx']   //import文件后缀
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

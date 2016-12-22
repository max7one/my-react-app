var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
  // devtool: 'eval',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
   extensions: ['', '.js', '.jsx']   //import文件后缀
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

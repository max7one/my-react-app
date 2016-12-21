var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './src/app.js'
  ],
  output: {
    path: __dirname+'/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};

var http = require('http');
var express = require('express');
var app = express();

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);

// 中间件webpack-dev-middleware
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

// 中间件webpack-hot-middleware
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

if (require.main === module) {
  var server = http.createServer(app);
  server.listen(process.env.PORT || 8000, function() {
    console.log("Listening on %j", server.address());
  });
}

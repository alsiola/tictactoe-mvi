'use strict'

var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var host = 'http://localhost'
var port = 8000

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?' + host + ':' + port.toString(),
    'webpack/hot/dev-server',
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    path: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin()
  ]
}

var compiler = webpack(config)
compiler.plugin('done', function () {
  console.log('App is running at ' + host + ':' + port)
})
var server = new WebpackDevServer(compiler, {
  historyApiFallback: true,
  hot: true,
  contentBase: './docs',
  stats: 'errors-only'
})
server.listen(port)

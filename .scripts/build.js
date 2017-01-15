'use strict'

var fs = require('fs-extra')
var path = require('path')
var mkdirp = require('mkdirp')
var webpack = require('webpack')
var ProgressBarPlugin = require('progress-bar-webpack-plugin')

var buildPath = path.join(process.cwd(), 'build')
var publicPath = path.join(process.cwd(), 'docs')

mkdirp.sync(buildPath)

var compiler = webpack({
  entry: [
    './src/'
  ],
  output: {
    filename: 'bundle.js',
    path: './docs/'
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
    new ProgressBarPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
})

compiler.run(function (err, stats) {
  if (err) {
    console.log(err)
  } else {
    fs.copySync(publicPath, buildPath)
  }
})

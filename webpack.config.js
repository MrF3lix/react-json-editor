var webpack = require('webpack')
var path = require('path')

var APP_DIR = path.resolve(__dirname, 'src/public');

module.exports = {
  entry: path.resolve(__dirname, 'index'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: APP_DIR
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader'},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']}
    ]
  }
}
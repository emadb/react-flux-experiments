var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './fe/js/App.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias:{
      'env':'../environments/dev'
    }
  },
  output: {
    path: path.resolve(__dirname, '/dist/'),
    filename: 'app.js',
    publicPath: '/'

  },
  plugins:[
    new HtmlWebpackPlugin({
      template: 'fe/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ["style", "css?sourceMap=true&root=../", "sass?sourceMap=true&root=../"]},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
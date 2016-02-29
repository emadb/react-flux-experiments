var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/components/App.jsx',
    './src/index.html'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias:{
      'env':'../environments/dev'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/js/app.js'
  },
  plugins:[
    
  ],
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.scss$/, loaders: ["style", "css?sourceMap=true&root=../", "sass?sourceMap=true&root=../"]},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.html$/, loaders: ['file?name=[name].[ext]']},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
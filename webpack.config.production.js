var path = require('path')
var webpack = require('webpack')

var config = {

  entry: path.resolve(__dirname, 'app/app'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [

      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'jsx?harmony'],
        include: path.resolve(__dirname, 'dist')
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }

    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"production"' }
    }),
  ]

}

module.exports = config

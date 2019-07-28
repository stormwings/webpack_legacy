const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/js/index.js')
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader"
        }),
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/'
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/[name].css"),
  ]
}
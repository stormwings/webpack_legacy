const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// HELPERS

// helper to iterate "css/scss" in different folders
function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}

// WEBPACK CONFIGS

module.exports = {
  // Initial => sets the initial configs to your application
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, '../src/js/index.js')
  },
  devServer: {
    // watch all the src folder files
    contentBase: path.join(__dirname, '../src'),
    watchContentBase: true,
    hot: true,
    // open in browser (localhost:9000)
    open: true,
    port: 9000
  },
  // Loaders => allow to process other types of files.
  module: {
    rules: [
      // To use the latest javascript version.
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // This loader and plugin extracts CSS/SASS/CSS into separate files.
      // It creates a CSS file per JS file which contains CSS.
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // reload browser when css changes
              hmr: true,
              reloadAll: true
            }
          },
          // styles loaders
          'css-loader',
          'sass-loader'
        ]
      },
      // A loader for webpack which transforms files into base64 URIs.
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'vendor/assets/'
          }
        }
      },
      // The file-loader resolves "import/require()" on a file into a url
      // Emits the file into the output directory.
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'vendor/fonts/'
            }
          }
        ]
      }
    ]
  },
  // Plugins => extends webpack and loaders capacities.
  plugins: [
    new CopyPlugin([
      {
        from: './src/assets',
        to: './assets'
      }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: 'webpack-dev-server',
      template: './src/index.html'
    })
  ],
  // Optimizations => ???
  optimization: {
    splitChunks: {
      cacheGroups: {
        // add optimization for each webpack entry config
        indexStyles: {
          name: 'index',
          test: (m, c, entry = 'index') => m.constructor.name === 'ScssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};

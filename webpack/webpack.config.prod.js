const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

// HELPERS

// helper to iterate all the "css/scss" in different folders
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
  mode: 'production',
  entry: {
    page: path.resolve(__dirname, '../src/js/page.js'),
    modal: path.resolve(__dirname, '../src/js/modal.js'),
  },
  // Loaders => allow webpack to process other types of files to use in your application.
  module: {
    rules: [
      // This loader allows transpiling JavaScript files using Babel. To use the latest javascript version.
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      // This loader and plugin extracts CSS/SASS/CSS into separate files. It creates a CSS file per JS file which contains CSS.
      {
        test: /\.(sa|sc|c)ss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ],
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
      // The file-loader resolves "import/require()" on a file into a url and emits the file into the output directory.
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'vendor/fonts/'
          }
        }]
      }
    ]
  },
  // Plugins => extends webpack and loaders capacities.
  plugins: [
    new CopyPlugin([{
      from: './src/assets',
      to: './assets'
    }, ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HTMLWebpackPlugin({
      title: 'Homepage',
      template: './src/index.html',
      filename: './../dist/index.html'
    })
  ],
  // Optimizations => ???
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      })
    ],
    splitChunks: {
      cacheGroups: {
        // add optimization for each webpack entry config
        pageStyles: {
          name: 'page',
          test: (m, c, entry = 'page') =>
            m.constructor.name === 'ScssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
        modalStyles: {
          name: 'modal',
          test: (m, c, entry = 'modal') =>
            m.constructor.name === 'ScssModule' && recursiveIssuer(m) === entry,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  }
}
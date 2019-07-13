const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

// path => para mejorar el manejo de las ubicaciones
// dirname => para ubicarse en la raiz del proyecto

module.exports = {
  // archivos ".js" de entrada
  entry: {
    index: path.resolve(__dirname, '../src/js/index.js')
  },
  // el modo de configuración de entorno
  mode: 'development',
  // ubicación de salida
  output: {
    // directorio de salida
    path: path.resolve(__dirname, '../dist'),
    // nombre del archivo => [subcarpeta]/[variable_de_entry].js
    filename: 'js/[name].js'
  },
  // Loaders => son la funcionalidad que nos da Webpack para interpretar tipos de archivos no soportados de forma nativa por Javascript.
  module: {
    rules: [{
      // expresion regular que encontrará todos los .css en el proyecto
      test: /\.css$/,
      // respetar el orden en 'use'
      // style-loader => para que podamos interpretar código .css
      // css-loader => para que podamos inyectar con imports de js en un .css
      // mini-css-extract-plugin => plugin para generar archivos .css
      use: [{
        // 'carga el loader' del plugin mini-css-extract-plugin
        loader: MiniCSSExtractPlugin.loader
      }, 'css-loader']
    }]
  },
  // Los Plugins sirven para extender las capacidades de webpack y dar más poder a los loaders.
  plugins: [
    // para que leamos y trabajemos con .css
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  // el archivo que va a iniciar a leer webpack
  // usamos path para mejorar las ubicaciones
  entry: {
    index: path.resolve(__dirname, '../src/js/index.js')
  },
  // el modo de compresion y configuración
  mode: 'development',
  // donde irá a parar y como se llamará el archivo
  output: {
    // usamos path para manejar mejor las ubicaciones 
    // dirname hace que se ubique en la raiz del proyecto
    // los parametros siguientes seran las carpetas/archivos
    path: path.resolve(__dirname, '../dist'),
    // nombre del archivo => [variable_de_entry].js
    filename: 'js/[name].js'
  },
  // Loaders son la funcionalidad que nos da Webpack para interpretar tipos de archivos no soportados de forma nativa por Javascript.
  module: {
    rules: [{
      // expresion regular que encontrará todos los .css
      test: /\.css$/,
      // (respetar el orden)
      // style-loader => para que podamos interpretar código .css
      // css-loader => para que podamos inyectar con imports de js en un .css
      // hay que instalarlo: npm install --save-dev css-loader
      use: [{
        // carga el loader del plugin mini-css-extract-plugin
        loader: MiniCSSExtractPlugin.loader
      }, 'css-loader']
    }]
  },
  plugins: [
    // para que leamos y trabajemos con .css
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
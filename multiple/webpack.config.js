const path = require('path')

module.exports = {
  // el archivo que va a iniciar a leer webpack
  // usamos path para mejorar las ubicaciones
  entry: {
    home: path.resolve(__dirname, '../src/js/home.js'),
    contact: path.resolve(__dirname, '../src/js/contact.js')
  },
  // el modo de compresion y configuración
  mode: 'development',
  // donde irá a parar y como se llamará el archivo
  output: {
    // usamos path para manejar mejor las ubicaciones 
    // dirname hace que se ubique en la raiz del proyecto
    // los parametros siguientes seran las carpetas/archivos
    path: path.resolve(__dirname, '../js'),
    // nombre del archivo => [variable_de_entry].js
    filename: '[name].js'
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
      use: ['style-loader', 'css-loader']
    }]
  }
}
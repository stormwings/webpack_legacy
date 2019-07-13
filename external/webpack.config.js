const path = require('path')

module.exports = {
  // el archivo que va a iniciar a leer webpack
  // usamos path para mejorar las ubicaciones
  entry: path.resolve(__dirname, '../index.js'),
  // el modo de compresion y configuración
  mode: 'development',
  // donde irá a parar y como se llamará el archivo
  output: {
    // usamos path para manejar mejor las ubicaciones 
    // dirname hace que se ubique en la raiz del proyecto
    // los parametros siguientes seran las carpetas/archivos
    path: path.resolve(__dirname, '../js'),
    // nombre del archivo
    filename: 'bundle.js'
  }
}
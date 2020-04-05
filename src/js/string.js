// El método trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos. 
// El método no afecta al valor de la cadena de texto.
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// remove left or right spaces
String.prototype.trimLeft() 
String.prototype.trimRight() 
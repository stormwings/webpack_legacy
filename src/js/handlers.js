// Throw
// Utilice la sentencia throw para lanzar una excepción. Cuando lanza una excepción, 
// expresion especifica el valor de la excepción. Cada uno de los siguientes ejemplos lanza una excepción:
throw "Error2"; // genera una excepción con un valor cadena 
throw 42; // genera una excepción con un valor 42 
throw true; // genera una excepción con un valor true

function ExceptionUsuario(mensaje) {
  this.mensaje = mensaje;
  this.nombre = "ExceptionUsuario";
}

function getNombreMes(mes) {
  mes = mes - 1; // Ajustar el número de mes al índice del arreglo (1 = Ene, 12 = Dic)
  var meses = new Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul",
     "Ago", "Sep", "Oct", "Nov", "Dic");
  if (meses[mes] != null) {
     return meses[mes];
  } else {
     miExcepcionUsuario = new ExceptionUsuario("NumeroMesNoValido");
     throw miExcepcionUsuario;
  }
}

try {
  // sentencias para try
  nombreMes = getNombreMes(miMes);
} catch (excepcion) {
  nombreMes = "desconocido";
  registrarMisErrores(excepcion.mensaje, excepcion.nombre); // pasa el objeto exception al manejador de errores
}

// se puede hacer throw de errores
function entrycheck(){
  try{
      var agecheck=prompt("This movie is rated PG-13. Please enter your age before continuing:")
      if (isNaN(parseInt(agecheck)))
          throw new Error("Please enter a valid age")
      else if (agecheck<13)
          throw new Error("Sorry, but you are too young for this movie")
      alert("Enjoy the movie!")
  }
  catch(e){
      alert(e.name+" "+e.message)
  }
}

// Error
// Representa un error en tiempo de ejecución.
new Error()
new Error(mensaje)


// Normalmente los objetos de Error se crean con la intención de lanzarlos utilizando throw. 
// Es posible manejar el error mediante try...catch:
try {
  throw new Error("Whoops!");
} catch (e) {
  alert(e.name + ": " + e.message);
}

// Es posible que desee definir sus propios tipos de error derivados de Error para poder lanzar
// new MyError()  y usar instanceof MyError para comprobar el tipo de error en el manejador de excepciones. 
// Create a new object, that prototypically inherits from the Error constructor
function MyError(message) {
  this.name = 'MyError';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

try {
  throw new MyError();
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'Default Message'
}

try {
  throw new MyError('custom message');
} catch (e) {
  console.log(e.name);     // 'MyError'
  console.log(e.message);  // 'custom message'
}

// Try Catch
// La declaración try...catch señala un bloque de instrucciones a intentar (try)
// y especifica una respuesta si se produce una excepción (catch).
try {
  nonExistentFunction();
}
catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

// test exception
try {
  // puede lanzar tres tipos de excepciones
  myroutine();  
} catch (e) {
  if (e instanceof TypeError) {
      // sentencias para manejar excepciones TypeError
  } else if (e instanceof RangeError) {
      // sentencias para manejar excepciones RangeError
  } else if (e instanceof EvalError) {
      // sentencias para manejar excepciones EvalError
  } else {
     // sentencias para manejar cualquier excepción no especificada
     logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
  }
}

// Note que la cláusula finally se ejecuta sin importar si una excepción es o no lanzada. 
// Si una excepción es lanzada, las instrucciones en la cláusula finally se ejecutan incluso 
// si ninguna cláusula catch maneja la excepción.
// Usted puede usar la cláusula finally para hacer que su script falle plácidamente cuando una
// excepción ocurra; por ejemplo, para hacer una limpieza general, usted puede necesitar liberar 
// un recurso que su script haya retenido.
openMyFile()
try {
   // retiene un recurso
   writeMyFile(theData);
}
finally {
   closeMyFile(); // siempre cierra el recurso
}

// anidated try
try {
  try {
    throw new Error('oops');
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Puede usar throw para volver a lanzar una excepción después de cogerla. 
// El siguiente ejemplo coge una excepción con un valor numérico y la vuelve a 
// lanzar si el valor es superior a 50. 

try {
  throw n; // lanza una excepción con un valor numérico
} catch (excepcion) {
  if (excepcion <= 50) {
     // sentencias para manejar la excepción 1-50
  } else {
     // no se puede manejar esta excepción, así que se vuelve a lanzar
     throw excepcion;
  }
}
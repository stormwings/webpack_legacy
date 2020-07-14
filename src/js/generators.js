// El objecto Generador es retornado por generator function 
// y conforma tanto un protocolo iterable como un protocolo iterador
// son funciones especiales, pueden pausar su ejecución y luego volver al
// punto donde quedaron

function* hello() {
  if (true) {
    yield 'Hello';
  }
  if (true) {
    yield 'World';
  }
};

// Hello World
const generatorHelloWorld = hello();

console.log(generatorHelloWorld.next().value); // Hello
console.log(generatorHelloWorld.next().value); // World
console.log(generatorHelloWorld.next().value); // undefined (not more yields)

function* idMaker() {
  var index = 0;
  while(true)
      yield index++;
}

// ID Maker
var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// ID Maker with reset
function* idMakerWithReset() {
  let id = 1;
  let reset;
  while (true) {
    // yield returns a value that come from generator argument
    reset = yield id;
    if (reset) {
      id = 1
    } else {
      id++
    }
  }
}

var genRestart = idMakerWithReset(); // "Generator { }"

console.log(genRestart.next().value); // 1
console.log(genRestart.next().value); // 2
console.log(genRestart.next(true).value); // 1 because yield pass value to 'reset'
console.log(genRestart.next().value); // 2

// Fibonacci
function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)

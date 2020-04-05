// El objecto Generador es retornado por generator function 
// y conforma tanto un protocolo iterable como un protocolo iterador

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

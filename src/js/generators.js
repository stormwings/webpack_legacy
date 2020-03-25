function* hello() {
  if (true) {
    yield 'Hello';
  }
  if (true) {
    yield 'World';
  }
};

// save the generator
const generatorHelloWorld = hello();

console.log(generatorHelloWorld.next().value); // Hello
console.log(generatorHelloWorld.next().value); // World
console.log(generatorHelloWorld.next().value); // undefined (not more yields)
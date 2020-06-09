// Variables Storage

// Types => Stack and Heap
// Stack: store all common variables and Heap pointers (pill similar)
// Heap: store the objects in the memory (matrix A1, B2, C3.. etc. similar)

// Scope

// Global Scope
// var => classic javascript's (variable with global scope)
var global = 'test';

function anotherFunction() {
  global = 'test2';
  console.log(global); // test2 because reasigned in global scope
};

anotherFunction();
console.log(global); // test2 because reasigned in global scope

// Local Scope
// let => javascript's variable with block scope
// const => innmutable variable with block scope (object can change keys)
// limitando su alcance al bloque, declaración, o expresión donde se está usando.
// no se pueden redeclarar/reasignar
// tambien corrige errores en los iteradores
let world = 'world';
const helloWorld = 'hello world';

const helloWordFunction = () => {
  const hello = 'my world';
  console.log(hello);
};
// console.log(hello); // error because not defined (hello is't global)

helloWordFunction();

// example 2

var scope = 'i am a global';
const functionScope = () => {
  var scope = 'i am a local';

  const func = () => {
    return scope;
  };

  console.log(func()); // return local scope
}
functionScope();
console.log(scope); // return global scope

// Function scope

const fruits = () => {
  var fruit = 'apple';
  console.log(fruit);
};
console.log(fruit);

fruits();

var vegetable = 'apple';

function vegetables() {
  vegetable = 'apple2';
  console.log(vegetable);
};

vegetables();
console.log(vegetable);

// Block scope

const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    let fruits2 = 'banana';
    const fruits3 = 'kiwi';
  };
  console.log(fruits1);
  // does'nt work because are accesibles in block scope
  // console.log(fruits2);
  // console.log(fruits3);
};

fruits();

// other example

let x = 1;
var y = 3; {
  let x = 2;
  var y = 4;
  console.log(x); // show 2 block scope values
  console.log(y); // show 4 global scope values
}

console.log(x); // show 1, different that block scope
console.log(y); // show 4, modified in global scope

// other example

const iterateScope = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  };
};

// show always 10, because var is reassigned
iterateScope();
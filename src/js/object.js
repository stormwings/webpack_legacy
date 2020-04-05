const obj = {
  name: 'Mariano',
  address: 'Chile 1273',
  phone: '1123433376'
};

// ES9
let {
  name,
  ...all
} = obj;

// mostrará name en una variable
// mostrará el resto de elementos en otra variable
console.log(name, all);

// Copia los valores de todas sus propiedades enumerables
// desde uno o más objetos fuente a un objeto destino.
Object.assign();


// Returns an array containing all of the [key, value] 
// pairs of a given object's own enumerable string properties.
var obj = { foo: 'bar', baz: 42 };
Object.entries(obj); // [ ['foo', 'bar'], ['baz', 42] ]

var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.entries(obj); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// El método Object.fromEntries() toma una lista de pares con clave-valor y 
// devuelve un nuevo objeto el cual sus propiedades estan dadas por esos pares. 
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

// The Object.keys() / values() method returns an array of a given object's own enumerable property names
// iterated in the same order that a normal loop would.
console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]

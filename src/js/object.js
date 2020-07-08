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

// Object cloning

// Method 1: assign variable
let car = {
  color: "blue",
  year: 2001,
  owner: {
    name: "Mariano",
    age: 25
  }
}

let otherCar = car

console.log(car, otherCar)
otherCar.color = "green"
console.log(car, otherCar) // It changes in both object :(
// because assign variable only change the "Stack" object pointer (of "Heap")

// Method 2: with Object assign
let people = {
  name: "Mariano",
  address: {
    street: "Belgrano",
    number: 1200,
  }
}

let clonePeople = Object.assign({}, people)
console.log(people, clonePeople)
clonePeople.name = "Flopy"
console.log(people, clonePeople) // Changes only in "clonePeople"
// Note: the problem here is that only change the first order keys..
// it means that address have the same problem that Method 1
clonePeople.address.street = "Colegiales"
console.log(people, clonePeople) // It changes in both object too e.e

// Method 3: with parsing (best)
let country = {
  name: "Argentina",
  population: 50000000,
  capital: {
    name: "Buenos Aires",
    population: 3500000
  }
}
let cloneCountry = JSON.parse(JSON.stringify(country))
console.log(country, cloneCountry)
cloneCountry.name = "Denmark"
cloneCountry.population = 5800000
cloneCountry.capital.name = "Copenhagen"
cloneCountry.capital.population = 600000
console.log(country, cloneCountry)
// It changes in both object completly because are full different objects!

// Other example with Object.assign

// bad

const a = { value: 2 }

const addOne = () => a.value += 1 // modifies the global object state
const timesTwo = () => a.value *= 2 // modifies the global object state

// you can uncomment the second block and get different value in global object 
// addOne()
// timesTwo()
// console.log(a.value)

timesTwo()
addOne()
console.log(a.value)

// good

const b = { value: 2 }

const addOnePure = b => Object.assign({}, b, { value: b.value + 1 }) // pure function mode
const timesTwoPure = b => Object.assign({}, b, { value: b.value * 2 }) // pure function mode

// you can use both blocks and global object dont was modified. And pure function works correctly
addOnePure(b)
timesTwoPure(b)
console.log(b.value)

// timesTwoPure(b)
// addOnePure(b)
// console.log(b.value)

// PROTOTYPE
function Hero(name) {
  // this = Object.create(Hero.prototype);
  this.name = name;
  // return this;
}

Hero.prototype.saludar = function() {
  console.log(`New: ${this.name}`);
};

const zelda = new Hero('Zelda');
zelda.saludar();

const link = new Hero('Link');
link.saludar();

// GETTERS & SETTERS
const player = {
  sound: {
    muted: false,
  },
  get muted() {
    return this.sound.muted
  },
  set muted(value) {
    if (value === true) {
      this.sound.muted = value
    }
  }
}
if (!player.muted) {
  player.muted = true
}
console.log(player)
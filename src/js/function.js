// common function

function newFunction(name, age, country) {
  var name = name || 'mariano';
  var age = age || 26;
  var country = country || 'Argentina';

  console.log(name, age, country);
}

// es2015

const newFunction2 = (name = 'mariano', age = 26, country = 'Argentina') => {
  console.log(`${name} ${age} ${country}`);
}

// function destruct arrow and return 'false'
const isOld = ({ age }) => age >= 60;

// function destructor parameters
const people = {
  name: 'Mariano',
  age: 25
};

function showName({ name }) {
  console.log(name.toUpperCase());
}

showName(people);

// desestructuring variables
function showName(people) {
  var { name } = people
  console.log(name.toUpperCase())
}

// Pure functions
// Is pure function when returns the same result each execution
// New Dates cant be pure functions, or async
const double = x => x * 2
console.log(double(2)) // get 4 ever
console.log(double(2)) // get 4 ever
console.log(double(2)) // get 4 ever

// Using pure functions using immutability
// is important the pure functions be the most immutable posible, there
// are two examples using immutable and mmutable pure functions

// not immutable
const addToList = (list, item, quantity) => {
  list.push({ item, quantity })
  return list
}

// immutable
const addToList = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list))
  newList.push({ item, quantity })
  return newList
}
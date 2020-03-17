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
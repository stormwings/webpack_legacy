// do while
var contador = 0;
var llueve = () => Math.random() > 0.25; // arrow function

do {
  contador++;
} while (!llueve()); // until the return is false

var frecuencia = contador === 1 ? "vez" : "veces";

console.log(`Fui a ver si llovía ${contador}${frecuencia}`);

// Filter
var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
};

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
};

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
};

// helper functions
const esAlta = ({ altura }) => altura > 1.8;
const esBaja = ({ altura }) => !esAlta({altura});

// declare array and filter with helpers
var personas = [sacha, martin, alan];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);

// Map
var personas = [sacha, alan, martin];

// helper function to change 'altura' value (featuring transform)
const pasarAlturaCms = persona => ({
  ...persona,
  altura: persona.altura * 100
});

var personasCms = personas.map(pasarAlturaCms);
console.log(personasCms);


// REDUCE ARRAY TO SINGLE VALUE

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros;

var totalDeLibros = persona.reduce(reducer, 0);

console.log(`El total de libros leidos es: ${totalDeLibros}`);

// SUM OF ARRAY ITEMS

const lineA = 5
const lineB = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

const fun = item => typeof item === 'object'
  ? item.reduce((sum, item) => sum += item)
  : undefined

console.log(fun(lineA))
console.log(fun(lineB))

// MATRIX EDGES

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const highItem = matrix => {
  let value = 0
  matrix.forEach((row, i) => {
    row.forEach((element, j) => {
      if (i === j) {
        value += element
      }
    })
  });

  return value
}

const lowItem = matrix => {
  const size = matrix.length - 1
  let value = 0

  let i = 0
  while (i <= size) {
    value += matrix[size - i][i]
    i++
  }

  return value
}

const getModule = number => number < 0 ? number * (-1) : number

const sumX = highItem(arr)
const sumY = lowItem(arr)

console.log(getModule(sumX - sumY))

// factions of positive, negative and zeros

const arr = [1, 1, 0, -1, -1]
const length = arr.length
let result = []

let sumPositives = 0
let sumNegatives = 0
let sumZeros = 0

arr.forEach(element => {
  switch (true) {
    case (element > 0):
      sumPositives++
      break;
    case (element < 0):
      sumNegatives++
      break;
    default:
      sumZeros++
      break;
  }
});

const positives = sumPositives / length
const negatives = sumNegatives / length
const zeros = sumZeros / length

result.push(positives.toFixed(6))
result.push(negatives.toFixed(6))
result.push(zeros.toFixed(6))

console.log(result)

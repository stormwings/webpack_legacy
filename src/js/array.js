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
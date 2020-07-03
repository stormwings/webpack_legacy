// THIS reference the object that is currently calling the function.

// this en el scope global
// * retorna el objeto global window
console.log(`this: ${this}`); 

// this en el scope de una función
// * también retorna el objeto global window (por que se ejecuta en window)
function whoIsThis() {
  return this;
}
console.log(`whoIsThis(): ${whoIsThis()}`);

// this en el scope de una función en strict mode
// * retorna undefined por que no se toma en cuenta el scope global
function whoIsThisStrict() {
  'use strict';
  return this;
}
console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

// this en el contexto de un objeto
// * retorna "Mariano" por que esta dentro de un Object y hace referencia a sus elementos
const person = {
  name: 'Mariano',
  saludar: function() {
    console.log(`Hola soy ${this.name}`);
  },
};
person.saludar();

// this cuando sacamos a una función de un objeto
// * retorna undefined por que no se toma en cuenta el scope global
const accion = person.saludar;
accion();

// this en el contexto de una "clase"
// * funciona como constructor, llenamos el atributo 'name'
function Person(name) {
  // this = {}
  this.name = name;
}
// * agregamos un método para acceder a su atributo
Person.prototype.saludar = function() {
  console.log(`Me llamo ${this.name}`);
};
// * instanciamos angela con un objeto "Person"
const angela = new Person('Angela');
// * 'this' hará referencia al "const angela", osea al objeto instanciado
angela.saludar()

// CALL, APPLY y BIND
// son metodos que tienen 'todas' las funciones para manejar el 'this' (cambiar el contexto)

// Establecer `this` usando `call`
function saludar() {
  console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}
const richard = {
  name: 'Richard',
  apellido: 'Kaufman López',
};
saludar.call(richard);

// Establece `this` usando `call` y pasar argumentos a la función
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
}
caminar.call(richard, 400, 'norte');
// Establece `this` usando `apply` y pasar argumentos a la función
const parametros = [800, 'noreste'];
caminar.apply(richard, parametros);

/*
  Call - comma
  Apply - arreglo
*/

// Establecer `this` en una nueva función usando `bind`
const daniel = { name: 'Daniel', apellido: 'Sánchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();
const danielCamina = caminar.bind(daniel, 2000);
danielCamina('oeste');

// EJEMPLO HTML

// Cuándo es útil usar uno de estos métodos
const buttons = document.getElementsByClassName('call-to-action');
// buttons.forEach(button => {
//   button.onclick = () => alert('Nunca pares de aprender!');
// });

// NodeList
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('Nunca pares de aprender!');
});

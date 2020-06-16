// Los closures son funciones que retornan otra funcion
// ademas permiten conservar el scope de las variables al momento que son declaradas

// simple example
function buildSum(base) {
  return function(value) {
    return base + value
  }
}

const addFive = buildSum(0)
console.log(addFive(10))

// using ECS5 example
const buildRest = base => value => base - value

const restFive = buildRest(10)
console.log(restFive(3))

// closure currying

// without currying
function sumThreeNumber(a, b, c) {
  return a + b + c
}
console.log(sumThreeNumber(1, 2, 3))

// with currying
function sumThreeNumber(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}
console.log(sumThreeNumber(1)(2)(3)) // 6

// Not a closure (only console.log)
// const moneyBox = coins => {
//   var saveCoins = 0;

//   saveCoins += coins;
//   console.log(`Moneybox = $${saveCoins}`);
// };

// moneyBox(5); // show 5 because is'nt a closure
// moneyBox(10); // show 10 because is'nt a closure

// Un Closure
// Es la combinación de una función y el ámbito léxico en el que se declaró dicha función.
// Es decir los closures o clausuras son funciones que manejan variables independientes.
// En otras palabras, la función definida en el closure "recuerda" el ámbito en el que se ha creado.

const alcancia = () => {
  var saveCoins = 0; // closure value (setted in global scope)

  const countCoins = coins => {
    saveCoins += coins;
    console.log(`Moneybox: $${saveCoins}`);
  }

  return countCoins;
}

let myMoneyBox = alcancia();
myMoneyBox(4); // 4 xq recuerda la asignación del valor anterior
myMoneyBox(6); // 10 xq recuerda la asignación del valor anterior
myMoneyBox(10); // 20 xq recuerda la asignación del valor anterior

// Lexical scope in closures

const buildCount = i => {
  let count = i; // closure value (setted in function scope)

  const displayCount = () => {
    console.log(count++);
  };

  return displayCount;
};

const myCount = buildCount(1);
myCount(); // 1
myCount(); // 2
myCount(); // 3

const myOtherCount = buildCount(10);
myOtherCount(); // 10
myOtherCount(); // 11

// Object

const person = () => {
  let saveName = "Name";
  return {
    getName: () => saveName,
    setName: (name) => {
      saveName = name;
    },
  };
};

const newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Mariano');
console.log(newPerson.getName());

// Object 2

const person = () => {
  // Convertir a una variable "privada"
  // hacer que solo mediante la funcion se pueda cambiar el estado y no desde afuera sin funciones osea practicamente directamente cambiarle su valor
  let guardarNombre = "Name";
  // asegurar los cambios de la variable privada la cual soo se puede modificar por metodos y jamas por valor directo
  const estadoNombre = () => {
    return guardarNombre;
  };
  // Creacion de un pseudo-objeto para manipular estados
  return {
    getName: () => {
      return guardarNombre;
    },
    setName: (nombre) => {
      guardarNombre = nombre;
    },
    estadoNombre
  };
};

nuevaPersona = person();
console.log(nuevaPersona.getName());
nuevaPersona.setName('Mariano');
console.log(nuevaPersona.getName());
console.log(nuevaPersona.estadoNombre());

// With loop

const iterateScope = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  };
};
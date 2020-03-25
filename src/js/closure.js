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
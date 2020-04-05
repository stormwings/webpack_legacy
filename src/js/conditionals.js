// Falsy values in Javascript
//   false
//   0
//   null
//   ""
//   undefined
//   NaN

// Switch
let signo = "libra"

switch (signo) {
  case 'aquario':
    console.log('Es acuario');
    break;
  case 'libra': // return piscis too
  case 'piscis':
    console.log('Es piscis');
    break;
  default:
    console.log('Es otro signo');
    break;
}

// Do While
let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
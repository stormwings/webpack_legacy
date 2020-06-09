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

// compare triples (check who wins in points)

const ana = [17, 28, 30]
const bob = [99, 16, 8]

let i = 0
let result = [0, 0]

while (i < 3) {
  if (ana[i] > bob[i]) {
    result[0]++
  } else if (ana[i] < bob[i]) {
    result[1]++
  }
  i++
}

// console.log(result)

// FIBONACCI WITH #

let value = ""
const sumArray = item => item += "#"
const fillSpaces = (string, max) => {
  let sum = string
  while (sum.length !== max) {
    sum = ` ${sum}`
  }
  console.log(sum)
}

const n = 6

for (let index = 0; index < n; index++) {
  value = sumArray(value)
  // console.log(value)
  fillSpaces(value, n)
}
// Example 1
// Works
a = 2
var a
console.log(a)

// Example 2
// Works
a = 2
console.log(a)

// Example 3
// Error because js only uses hoisting in declarations, not initialitation
console.log(a)
var a = 2

// Example 4
// Works because its adapted the hoisting ups the function, then execute the code
nameOfDog('Toby')

function nameOfDog(name) {
  console.log(name)
}
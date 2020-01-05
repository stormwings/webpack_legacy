// basic callback example

function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum));

function date(callback) {
  console.log('sin callback ' + new Date());
  setTimeout(() => {
    let date = new Date();
    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log('dentro del callback ' + dateNow);
}

date(printDate);

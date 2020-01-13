(() => {
  let number = 0;

  for (let count = 0; count < 10000000000; count++) {
    number = +count;
  }
  document.getElementById('element').innerHTML += 'app3 -- ' + number + ' ---- ' + Date() + '<br>';
})();

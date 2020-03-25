const obj = {
  name: 'Mariano',
  address: 'Chile 1273',
  phone: '1123433376'
};

// ES9
let {
  name,
  ...all
} = obj;

// mostrará name en una variable
// mostrará el resto de elementos en otra variable
console.log(name, all);
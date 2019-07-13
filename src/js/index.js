import '../css/index.css'

const array = ['hello ', 'how ', 'are ', 'you']
array.map(element => {
  setTimeout(() => {
    console.log(`${element}`)
  }, 3000)
})
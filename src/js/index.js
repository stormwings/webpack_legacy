import axios from 'axios'
import '../css/index.css'

const baseUrl = 'https://rickandmortyapi.com/api/'
const characters = 'character/'
const locations = 'location/'
const episodes = 'episode/'

const fetchApi = async (mode) => {
  let result;
  await axios.get(`${baseUrl}${mode}`)
    .then(({
      data
    }) => {
      result = data
    })
  return result
}

fetchApi(characters).then((result) => {
  console.log(result)
})
fetchApi(locations).then((result) => {
  console.log(result)
})
fetchApi(episodes).then((result) => {
  console.log(result)
})
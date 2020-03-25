import axios from 'axios';
const baseUrl = 'https://rickandmortyapi.com/api/';

// PROMISE
//   Una Promesa es una funcion para solicitar un valor no conocido en el momento que es creada la promesa.
//   permite asociar manejadores que actuarán en caso de éxito, o fallo. 
//   Estados:
//   pendiente (pending): estado inicial, no completa/rechazada.
//   completa (fulfilled): significa que la operación se completó satisfactoriamente.
//   rechazada (rejected): significa que la operación falló.

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      return resolve('First promise success!');
    } else {
      return reject('lul!');
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Second promise success!');
      }, 2000);
    } else {
      const error = new Error('Whooop!');
      reject(error);
    }
  });
};

// how to consume the promise
// call the function
somethingWillHappen
  .then(function (msn) {
    // when promise works correctly
  })
  .catch(function (msn) {
    // when promise fails
  })
  .finally(function (msn) {
    // when promise finish
  })

// how to consume many promises at the same time
// el then se ejecutan cuando terminen todas las promesas.
// el catch se ejecuta en el primer error.
Promise.all([
    somethingWillHappen,
    somethingWillHappen2
  ])
  .then(function () {})
  .catch(function () {})

// it executes the first promise on finish
Promise.race([
    somethingWillHappen,
    somethingWillHappen2
  ])
  .then(function () {})
  .catch(function () {})

// FETCH (replaces ajax in ES2015)
//   Es una funcion para inicializar peticiones asíncronas.
//   Esta completamente basada en Promise.
//   En el corazón de Fetch encontramos: HTTP Request, Responses, Headers, y Body
//   Headers => Representa los encabezados de la 'Req/Res'
//   Request => Representa una solicitud de recursos
//   Response => Representa la respuesta a una solicitud
//   Body => Nos ayuda a declarar cual será el contenido y como manejarlo (Works in Request & Response)

fetch("url") // example: an api to get a random user
  .then(function (response) {
    // on success, show on console and return as json
    console.log(response)
    return response.json()
  })
  .catch(function () {
    // on error, show message
    console.log('something went wrong')
  })

// Real Example
var url = 'https://example.com/profile';
var data = {
  username: 'example'
};

fetch(url, {
    method: 'POST', // method
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));

// Real Example (AXIOS)
const fetchApi = async mode => {
  let result;
  await axios.get(`${baseUrl}${mode}`).then(({
    data
  }) => {
    result = data;
  });
  return result;
};

fetchApi('character/').then(result => {
  console.log(result);
});

// FETCH & PROMISES

const fetchGetData = api => {
  return new Promise((resolve, reject) => {
    fetch(api)
      .then(response => response.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(new Error('error ', api));
      });
  });
};

const characters = `${baseUrl}character/`;

// 'multiple then' to solve callback hell
fetchGetData(characters)
  .then(data => {
    console.log('Number');
    console.log(data.info.count);
    return fetchGetData(`${characters}${data.results[0].id}`);
  })
  .then(data => {
    console.log(data.name);
    return fetchGetData(data.origin.url);
  })
  .then(data => {
    console.log(data.dimension);
  })
  .catch(error => {
    console.error(error);
  });

// ASYNC & AWAIT

const episodes = `${baseUrl}episode/`;
const locations = `${baseUrl}location/`;

const asyncFetch = async () => {
  // multiple 'await' and 'try/catch solves callback hell
  try {
    const episodesList = await fetchGetData(episodes);
    const locationsList = await fetchGetData(locations);
    console.log('episodes list');
    console.log(episodesList);
    console.log('locations list');
    console.log(locationsList);
  } catch (error) {
    console.error(error);
  }
};

asyncFetch();

// MULTIPLE ASYNC & AWAIT
//   async: declara quye una función es asíncrona
//   await: indica que se debe de terminar con el fragmento de código para continuar con la ejecución de la función

const getCharacters = () => fetchGetData(`${baseUrl}character/`);
const getEpisodes = () => fetchGetData(`${baseUrl}episode/`);
const getLocations = () => fetchGetData(`${baseUrl}location/`);

async function foo() {
  const [characters, episodes, locations] = await Promise.all([getCharacters(), getEpisodes(), getLocations()]);

  console.log(characters);
  console.log(episodes);
  console.log(locations);
}

foo();

// función dentro de "()" => la ejecuta cuando el navegador carga
const urlApi = 'https://yts.am/api/v2/list_movies.json?genre=';

(async function load() {
  async function getData(url) {
    const response = await fetch(url);
    const response_json = await response.json();
    return response_json;
  }

  const actionList = await getData(`${urlApi}action`);
  const terrorList = await getData(`${urlApi}terror`);
  const animationList = await getData(`${urlApi}animation`);
  console.log(actionList, terrorList, animationList);
})()

// Multiple promises
async function obtenerPersonajes() {
  let ids = [1, 2, 3, 4, 5, 6, 7]
  // se ejecutaran 7 promesas
  let promesas = ids.map(id => obtenerPersonaje(id))
  try {
    // se va a esperar que se terminen de ejecutar las promesas
    let personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()
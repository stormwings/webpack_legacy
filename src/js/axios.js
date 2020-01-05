import axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api/';

// AXIOS

const fetchApi = async mode => {
  let result;
  await axios.get(`${baseUrl}${mode}`).then(({ data }) => {
    result = data;
  });
  return result;
};

fetchApi('character/').then(result => {
  console.log(result);
});

// PROMISES

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    // can change to false
    if (true) {
      return resolve('First promise success!');
    } else {
      return reject('lul!');
    }
  });
};

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    // can change to false
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

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log(response))
  .catch(err => console.log(err));

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

// const characters = `${baseUrl}character/`;

// multiple then solves callback hell
// fetchGetData(characters)
//   .then(data => {
//     console.log('Number');
//     console.log(data.info.count);
//     return fetchGetData(`${characters}${data.results[0].id}`);
//   })
//   .then(data => {
//     console.log(data.name);
//     return fetchGetData(data.origin.url);
//   })
//   .then(data => {
//     console.log(data.dimension);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// ASYNC & AWAIT

// const episodes = `${baseUrl}episode/`;
// const locations = `${baseUrl}location/`;

// const asyncFetch = async () => {
//
// multiple 'await' and 'try/catch solves callback hell
//   try {
//     const episodesList = await fetchGetData(episodes);
//     const locationsList = await fetchGetData(locations);
//     console.log('episodes list');
//     console.log(episodesList);
//     console.log('locations list');
//     console.log(locationsList);
//   } catch (error) {
//     console.error(error);
//   }
// };

// asyncFetch();

// MULTIPLE ASYNC & AWAIT

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

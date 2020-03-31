// ROUTING

// ['', '1', '']
export const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export const resolveRoutes = route => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }

  return `${route}`;
};

// API

const API = 'https://rickandmortyapi.com/api/character/';

export const getData = async id => {
  const apiURl = id ? `${API}${id}` : API;

  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};
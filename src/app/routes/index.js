import Header from './../templates/Header';
import Character from '../components/Character';
import Home from '../components/Home';
import Error404 from '../components/404';

import {
  getHash,
  resolveRoutes
} from './helpers';


const routes = {
  '/': Home,
  '/:id': Character,
  '/contact': 'Contact'
}

const router = async () => {
  const $header = null || document.getElementById("Header");
  const $content = null || document.getElementById("content");

  $header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;
  $content.innerHTML = await render();
}

export default router;
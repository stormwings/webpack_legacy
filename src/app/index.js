// type 1

// import router from './routes';

// execute router when
// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);

// type 2

// const rout64 = [{
//   path: '/',
//   template: '<h1>Hola</h1>'
// },
// {
//   path: '/contacto',
//   template: '<h1>Contacto mi correo r@micorreo.com</h1>'
// },
// {
//   path: '/about',
//   template: '<h1>About Me</h1>'
// },
// ];

// class Router {
//   constructor(routes) {
//     this.routes = routes;
//     this._loadInitialRoute();
//   }

//   loadRoute(...urlSegs) {
//     const matchedRoute = this._matchUrl(urlSegs);

//     const url = `/${urlSegs.join('/')}`;

//     history.pushState({}, 'this works', url);

//     const routerOurElm = document.querySelectorAll('[data-router]')[0];

//     // add <div id="app" data-router />
//     routerOurElm.innerHTML = matchedRoute.template;
//   }

//   _matchUrl(urlSegs) {
//     const matchedRoute = this.routes.find(route => {
//       const routePathSegs = route.path.split('/').slice(1);

//       if (routePathSegs.length !== urlSegs.length) return false;

//       // check all elements match condition
//       const matchAllUrls = routePathSegs.every((routePathSegs, i) => routePathSegs === urlSegs[i]);

//       return matchAllUrls;
//     });

//     return matchedRoute;
//   }

//   _loadInitialRoute() {
//     const pathNameSplit = window.location.pathname.split('/');
//     const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';

//     this.loadRoute(...pathSegs);
//   }
// }

// const router = new Router(rout64);
// window.router = router;

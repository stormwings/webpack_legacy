// PAGE VISIBILITY
// El evento de cambio de visibilidad se activa en el documento cuando 
// el contenido de su pestaña se ha hecho visible o se ha ocultado.

// Casos de uso para utilizar la API Page Visibility:
// + Un sitio tiene un carrusel de imágenes que no debería avanzar a 
// la siguiente diapositiva a no ser que el usuario esté viendo la página.

// + Una aplicación que muestra un panel de información y no se quiere que 
// se actualice la información del servidor cuando la página no está visible.

// + Una página quiere detectar cuando se está precargando para poder mantener
// un recuento preciso de las vistas de página.

// + Un sitio desea desactivar los sonidos cuando el dispositivo está en modo
// de espera (el usuario presiona el botón de encendido para apagar la pantalla).

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});

// INTERSECTION OBSERVER
// proporciona una manera de observar asincrónicamente los cambios en la 
// intersección de un elemento de destino con un elemento ancestro o con la 
// ventana de un documento de nivel superior.

// Casos de uso
// + Lazy-loading of images or other content as a page is scrolled.

// + Implementing "infinite scrolling" web sites, where more and 
// more content is loaded and rendered as you scroll, so that the user doesn't have to flip through pages.

// + Reporting of visibility of advertisements in order to calculate ad revenues.

// + Deciding whether or not to perform tasks or animation processes based
// on whether or not the user will see the result.

let options = {
  // This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
  rootMargin: '0px',
  // indicate at what percentage of the target's visibility the observer's callback should be executed. 
  threshold: 1.0
}
// 1.0 significa que cuando el 100% del objetivo es visible dentro del 
// elemento especificado por la opción raíz, se invoca la devolución de llamada.

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('#listItem');
observer.observe(target);

function callback(entries) {
  // entries son los objetos q estamos observando
  const entry = entries[0]

  const halfScreen = entry.intersectionRadio >= 0.5

  if (halfScreen) {
    console.log('A la mitad')
  } else {
    console.log('No esta a la mitad')
  }
}

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)

// Resume: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
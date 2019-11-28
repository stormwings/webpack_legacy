console.log('VANILLA MODULE');

// Selectors
const $element_general_selector_search = document.querySelector('.main #panel_one');
const $element_general_selector = document.querySelector('.autor__container');
const $element_id_selector = document.getElementById('panel_one');
const $element_class_selector = document.getElementsByClassName('date__container');
// console.log({
//   $element_general_selector_search,
//   $element_class_selector,
//   $element_general_selector,
//   $element_id_selector
// });

// Templates literal

// create tools
const $element_id = document.getElementById('panel_one');
const $html = document.implementation.createHTMLDocument();
const ItemTemplate = (src, title) =>
  `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${src}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${title}
        </h4>
      </div>`;
// generate template
const image_url =
  'https://www.google.com/logos/doodles/2019/200th-anniversary-of-museo-del-prado-4899096010686464.3-l.png';
$HTMLStringElement = ItemTemplate(image_url, 'Google');
// append template
$html.body.innerHTML = $HTMLStringElement;
$element_id.append($html.body.children[0]);

// Styles
// $element_id.classList; // to see array class
// $element_id.classList.add('active');
// $element_id.classList.remove('active');
// $element_id.classList.toggle('active'); // add or remove
// $element_id.style.border = '10px solid red';

// SIMULATING components (2 examples)

const text = () => {
  document.body.innerHTML = '<p>mariano</p>';
};

// function render(data) {
//   const $element = document.createElement('img');
//   $element.setAttribute('src', data.imageUrl);
//   // now must show it in the browser display (to end body's)
//   document.body.append($element);
// }
// // * some fetch
// render(data);

// CREATE elements and attributes assignation

function setAtributes($element, attributes) {
  for (const attribute in attributes) {
    // assign to $element each attribute in the attributes object
    // we can use getAttribute to comprobate
    $element.setAtribute(attribute, attributes[attribute]);
  }
}

// add a loading element when the user submit
$form.addEventListener('submit', event => {
  event.preventDefault();
  $home.classList.add('search-active');
  const $loader = document.createElement('img');
  setAtributes($loader, {
    src: 'src/images/loader.gif',
    height: 50,
    width: 50
  });
  // asign the $loader element with the attributes to a container
  $featuringContainer.append($loader);
});

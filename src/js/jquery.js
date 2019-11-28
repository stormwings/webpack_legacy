import $ from 'jquery';

console.log('JQUERY MODULE');

// Selectors
const $element_tag = $('article');
const $element_id = $('#panel_one');
const $element_class = $('.image');
const $element_search = $('#panel_one article .image');
// console.log({ $element_tag, $element_id, $element_class, $element_search });

// Templates
function ItemTemplate(src, title) {
  return (
    '<div class="primaryPlaylistItem">' +
    '<div class="primaryPlaylistItem-image">' +
    '<img src="' +
    src +
    '">' +
    '</div>' +
    '<h4 class="primaryPlaylistItem-title">' +
    title +
    '</h4>' +
    '</div>'
  );
}

// Events
const $bodymovin_element = document.getElementById('bm');
$bodymovin_element.addEventListener('click', () => console.log('pushed'));

const $form = document.getElementById('form');
$form.addEventListener('submit', event => {
  event.preventDefault();
});

import Swiper from 'swiper';

import 'swiper/css/swiper.css';
import 'swiper/css/swiper.min.css';
import 'swiper/js/swiper.js';
import 'swiper/js/swiper.min.js';

new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

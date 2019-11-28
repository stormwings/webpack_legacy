import lottie from 'lottie-web';

let animation = lottie.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './assets/json/lottie-data.json'
});

// WebP support check

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height ==2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function(support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
});

// Burger menu
const body = document.querySelector('body');
const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

burger.addEventListener('click', function(event) {
  burger.classList.toggle('active__burger');
  headerMenu.classList.toggle('active__burger');
  body.classList.toggle('lock');
});

searchBox.forEach(elm => {
  elm.addEventListener('click', () => {
    elm.previousElementSibling.value = '';
  });
});

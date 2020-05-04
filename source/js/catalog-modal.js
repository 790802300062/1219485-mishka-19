var openModalCart = document.querySelectorAll('.products__cart-link');
var modal = document.querySelector('.popup-add');
var ESC_KEY = 27;

for(var i = 0; i < openModalCart.length; i++) {
  openModalCart[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-add--show');
  });
  window.addEventListener('keydown', closeModalEsc);
}

var closeModalEsc = function(evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    if (modal.classList.contains('popup-add--show')) {
      evt.preventDefault();
      modal.classList.remove('popup-add--show');
    }
  }
}

window.addEventListener('keydown', closeModalEsc);

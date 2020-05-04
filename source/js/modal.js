var openModal = document.querySelector('.promo__btn');
var modal = document.querySelector('.popup-add');
var ESC_KEY = 27;

if (openModal) {
  openModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-add--show');
  });
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

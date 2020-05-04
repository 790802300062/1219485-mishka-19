var siteNav = document.querySelector('.page-header__site-list');
var userNav = document.querySelector('.page-header__user-list');
var jsOff = document.querySelector('.page-header__nav');
var menuToggle = document.querySelector('.page-header__toggle');

siteNav.classList.toggle('page-header__site-list--closed');
userNav.classList.toggle('page-header__user-list--closed');
jsOff.classList.toggle('page-header__nav--closed');
jsOff.classList.remove('page-header__nav--nojs');

menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  siteNav.classList.toggle('page-header__site-list--closed');
  userNav.classList.toggle('page-header__user-list--closed');
  jsOff.classList.toggle('page-header__nav--closed');
});

'use strict';

(function () {
  var body = document.querySelector('.body-wrapper');
  var buttonSelectCity = document.querySelector('.button-select-city');
  var modalSelectCity = document.querySelector('.modal-select-city');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');
  var pageContentWrapper = document.querySelector('.page-content__wrapper');

  var closeButton = document.querySelector('.modal-select-city__close-button');

  var openPopup = function () {
    modalSelectCity.classList.add('modal-select-city--open');
    body.classList.add('body-wrapper--cities-popup-open');
    pageHeader.classList.add('page-header__wrapper--cities-popup-open');
    pageContent.classList.add('page-content--cities-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.add('page-content__wrapper--cities-popup-open');
    }
    pageFooter.classList.add('page-footer--cities-popup-open');
  };

  var closePopup = function () {
    modalSelectCity.classList.remove('modal-select-city--open');
    body.classList.remove('body-wrapper--cities-popup-open');
    pageHeader.classList.remove('page-header__wrapper--cities-popup-open');
    pageContent.classList.remove('page-content--cities-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.remove('page-content__wrapper--cities-popup-open');
    }
    pageFooter.classList.remove('page-footer--cities-popup-open');
  };

  var onSelectCityMouseDown = function () {
    if (!modalSelectCity.classList.contains('modal-select-city--open')) {
      openPopup();
    }
  };

  var onSelectCityEnterPress = function (evt) {
    if (evt.key === 'Enter' && !modalSelectCity.classList.contains('modal-select-city--open')) {
      openPopup();
    }
  };

  var onCloseButtonMouseDown = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && modalSelectCity.classList.contains('modal-select-city--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!modalSelectCity.contains(evt.target) && !buttonSelectCity.contains(evt.target)) {
      closePopup();
    }
  };

  buttonSelectCity.addEventListener('click', onSelectCityMouseDown);
  closeButton.addEventListener('click', onCloseButtonMouseDown);
  window.addEventListener('keydown', onPopupEscPress);
  buttonSelectCity.addEventListener('keydown', onSelectCityEnterPress);
  window.addEventListener('click', onOverlayClick);
})();

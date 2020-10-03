'use strict';

(function () {
  var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  var sessionTimeList = document.querySelector('.sessions-time-list');
  var modalTypeDate = document.querySelector('.modal-type-date');
  var dateInput = document.querySelector('.modal-type-date__input');
  var selectedDate = document.querySelector('.selected-date');

  var priceList = document.querySelectorAll('.sessions-time-list__price');
  Number(priceList);
  var selectDateButton = document.querySelector('.button-select-date');

  var dateSpan = document.querySelector('.quest-order__date-span');
  var timeSpan = document.querySelector('.quest-order__time-span');
  var priceSpan = document.querySelector('.quest-order__price-span');
  var sessionTimeInputs = document.querySelectorAll('input[name="session-time"');

  var body = document.querySelector('.body-wrapper');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');

  var checkSessionAvailability = function () {
    for (var i = 0; i < sessionTimeInputs.length; i++) {
      if (sessionTimeInputs[i].checked === true) {
        timeSpan.innerHTML = sessionTimeInputs[i].value;
        priceSpan.innerHTML = priceList[i].innerHTML;
      }
    }
  };

  var setDate = function () {
    if (dateInput) {
      var newDate = new Date(dateInput.value);
      var day = newDate.getDate();
      var month = newDate.getMonth();

      if (dateInput.value.length < 1) {
        selectedDate.innerHTML = '';
      } else {
        selectedDate.innerHTML = day + ' ' + months[month];
        dateSpan.innerHTML = selectedDate.innerHTML;
      }
    }
  };

  var openPopup = function () {
    modalTypeDate.classList.add('modal-type-date--open');
    body.classList.add('body-wrapper--date-popup-open');
    pageHeader.classList.add('page-header__wrapper--date-popup-open');
    pageContent.classList.add('page-content--date-popup-open');
    pageFooter.classList.add('page-footer--date-popup-open');
  };

  var closePopup = function () {
    if (dateInput.checkValidity()) {
      modalTypeDate.classList.remove('modal-type-date--open');
      body.classList.remove('body-wrapper--date-popup-open');
      pageHeader.classList.remove('page-header__wrapper--date-popup-open');
      pageContent.classList.remove('page-content--date-popup-open');
      pageFooter.classList.remove('page-footer--date-popup-open');

      setDate();
      checkSessionAvailability();
    }
  };

  var onButtonMouseDown = function () {
    if (!modalTypeDate.classList.contains('modal-type-date--open')) {
      openPopup();
    }
  };

  var onButtonEnterPress = function (evt) {
    if (evt.key === 'Enter' && !modalTypeDate.classList.contains('modal-type-date--open')) {
      openPopup();
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && modalTypeDate.classList.contains('modal-type-date--open')) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.key === 'Enter' && modalTypeDate.classList.contains('modal-type-date--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!modalTypeDate.contains(evt.target) && !selectDateButton.contains(evt.target)) {
      closePopup();
    }
  };

  if (selectDateButton) {
    setDate();
    selectDateButton.addEventListener('click', onButtonMouseDown);
    selectDateButton.addEventListener('keydown', onButtonEnterPress);
    window.addEventListener('keydown', onPopupEscPress);
    dateInput.addEventListener('keydown', onPopupEnterPress);
    window.addEventListener('click', onOverlayClick);
  }

  if (sessionTimeList) {
    sessionTimeList.addEventListener('change', checkSessionAvailability);
  }
})();

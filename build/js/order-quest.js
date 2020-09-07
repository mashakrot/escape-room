'use strict';

(function () {
  var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  var sessionTimeList = document.querySelector('.sessions-time-list');
  var sessionStatesList = document.querySelector('.sessions-states');
  var modalTypeDate = document.querySelector('.modal-type-date');
  var dateInput = document.querySelector('.modal-type-date__input');
  var selectedDate = document.querySelector('.selected-date');

  var praceList = document.querySelectorAll('.session-time-list__prace');
  Number(praceList);
  var selectDateButton = document.querySelector('.button-select-date');
  var questOrderWrapper = document.querySelector('.quest-order__wrapper');

  var dateSpan = document.querySelector('.quest-order__your-order--date-span');
  var timeSpan = document.querySelector('.quest-order__your-order--time-span');
  var praceSpan = document.querySelector('.quest-order__your-order--prace-span');
  var sessionTimeInputs = document.querySelectorAll('.sessions-time-list__input');

  var body = document.querySelector('.body');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');

  var checkSessionAvailability = function () {
    for (var i = 0; i < sessionTimeInputs.length; i++) {
      if (sessionTimeInputs[i].checked === true) {
        questOrderWrapper.style = 'display: flex';
        timeSpan.innerHTML = sessionTimeInputs[i].value;
        dateSpan.innerHTML = selectedDate.innerHTML;
        praceSpan.innerHTML = praceList[i].innerHTML;
      }
    }
  };

  var openPopup = function () {
    modalTypeDate.classList.add('modal-type-date--open');
    body.classList.add('body--date-popup-open');
    pageHeader.classList.add('page-header__wrapper--date-popup-open');
    pageContent.classList.add('page-content--date-popup-open');
    pageFooter.classList.add('page-footer--date-popup-open');
  };

  var closePopup = function () {
    modalTypeDate.classList.remove('modal-type-date--open');
    body.classList.remove('body--date-popup-open');
    pageHeader.classList.remove('page-header__wrapper--date-popup-open');
    pageContent.classList.remove('page-content--date-popup-open');
    pageFooter.classList.remove('page-footer--date-popup-open');

    var newDate = new Date(dateInput.value);
    var day = newDate.getDate();
    var month = newDate.getMonth();

    if (dateInput.value.length < 1) {
      selectedDate.innerHTML = '';
    } else {
      sessionTimeList.style = 'display: flex;';
      sessionStatesList.style = 'display: flex;';

      selectedDate.innerHTML = day + ' ' + months[month];
    }

    checkSessionAvailability();
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

  var onOverlayClick = function (evt) {
    if (!modalTypeDate.contains(evt.target) && !selectDateButton.contains(evt.target)) {
      closePopup();
    }
  };

  selectDateButton.addEventListener('click', onButtonMouseDown);
  selectDateButton.addEventListener('keydown', onButtonEnterPress);
  window.addEventListener('keydown', onPopupEscPress);
  window.addEventListener('click', onOverlayClick);

  sessionTimeList.addEventListener('change', checkSessionAvailability);
})();

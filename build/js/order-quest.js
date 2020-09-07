'use strict';

(function () {
  var sessionTimeList = document.querySelector('.sessions-time-list');
  var modalTypeDate = document.querySelector('.modal-type-date');
  // modal-type-date--open
  var selectDateButton = document.querySelector('.button-select-date');
  var questOrderWrapper = document.querySelector('.quest-order__wrapper');
  var dateSpan = document.querySelector('.quest-order__your-order--date-span');
  var timeSpan = document.querySelector('.quest-order__your-order--time-span');
  var sessionTimeInputs = document.querySelectorAll('.sessions-time-list__input');

  var orderNavigation = document.querySelector('.page-header__navigation');
  var orderFooter = document.querySelector('.page-footer');
  var orderHeaderWrapper = document.querySelector('.page-header__wrapper');

  selectDateButton.addEventListener('click', function () {
    if (!modalTypeDate.classList.contains('modal-type-date--open')) {
      modalTypeDate.classList.add('modal-type-date--open');
      orderNavigation.classList.add('page-header__navigation--menu-open');
      orderFooter.classList.add('page-footer--menu-open');
      headerWrapper.classList.add('page-header__wrapper--menu-open');
    } else {
      modalTypeDate.classList.remove('modal-type-date--open');
      orderNavigation.classList.remove('page-header__navigation--menu-open');
      orderFooter.classList.remove('page-footer--menu-open');
      headerWrapper.classList.remove('page-header__wrapper--menu-open');
    }
  });


  sessionTimeList.addEventListener('change', function () {
    sessionTimeInputs.forEach(function (input) {
      if (input.checked === true) {
        questOrderWrapper.style = 'display: flex';
        timeSpan.innerHTML = input.value;
      }
    });
  });
})();

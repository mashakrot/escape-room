'use strict';

(function () {
  var navigationButton = document.querySelector('.navigation-button');
  var navigationButtonOpen = document.querySelector('.navigation-button--menu-open');

  var navigation = document.querySelector('.page-header__navigation');
  var footer = document.querySelector('.page-footer');
  var header = document.querySelector('.page-header__wrapper');

  navigationButton.addEventListener('click', function () {
    if (!navigationButton.classList.contains('navigation-button--menu-open')) {
      navigationButton.classList.add('navigation-button--menu-open');
      navigation.classList.add('page-header__navigation--menu-open');
      footer.classList.add('page-footer--menu-open');
      header.classList.add('page-header__wrapper--menu-open');
    } else {
      navigationButton.classList.remove('navigation-button--menu-open');
      navigation.classList.remove('page-header__navigation--menu-open');
      footer.classList.remove('page-footer--menu-open');
      header.classList.remove('page-header__wrapper--menu-open');
    }
  });
})();

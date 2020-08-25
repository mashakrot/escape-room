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
      navigation.style = 'display: flex;';
      footer.style = 'display: block;';
      header.style = 'background: linear-gradient(170.74deg, #633C0F -68.98%, #24150E 75.12%, #1A140D 132.97%)';
    } else {
      navigationButton.classList.remove('navigation-button--menu-open');
      navigation.style = 'display: none;';
      footer.style = 'display: none;';
      header.style = 'background: none';
    }
  });
})();

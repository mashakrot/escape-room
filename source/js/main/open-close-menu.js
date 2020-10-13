'use strict';

(function () {
  var navigationButton = document.querySelector('.navigation-button');
  var bodyMain = document.querySelector('.body-wrapper__main');
  var bodyManiac = document.querySelector('.body-wrapper__maniac');
  var bodyManiacOrder = document.querySelector('.body-wrapper__maniac-order');
  var bodyRitual = document.querySelector('.body-wrapper__ritual');
  var bodySecretsOfManshion = document.querySelector('.body-wrapper__secrets-of-mansion');
  var bodyFatalExperiment = document.querySelector('.body-wrapper__fatal-experiment');
  var navigation = document.querySelector('.page-header__navigation');
  var footer = document.querySelector('.page-footer');
  var content = document.querySelector('.page-content');
  var header = document.querySelector('.page-header__wrapper');

  var pageContentWrapper = document.querySelector('.page-content__wrapper');
  var questsList = document.querySelector('.quests-list');
  var choiceQuestsList = document.querySelector('.choice-quests-list-wrapper');

  var openMenu = function () {
    navigationButton.classList.add('navigation-button--menu-open');
    navigation.classList.add('page-header__navigation--menu-open');
    footer.classList.add('page-footer--menu-open');
    header.classList.add('page-header__wrapper--menu-open');
  };

  var closeMenu = function () {
    navigationButton.classList.remove('navigation-button--menu-open');
    navigation.classList.remove('page-header__navigation--menu-open');
    footer.classList.remove('page-footer--menu-open');
    header.classList.remove('page-header__wrapper--menu-open');
  };

  navigationButton.classList.add('navigation-button--js-is');
  navigation.classList.add('page-header__navigation--js-is');
  footer.classList.add('page-footer--js-is');
  header.classList.add('page-header__wrapper--js-is');
  content.classList.add('page-content--js-is');

  if (bodyMain) {
    bodyMain.classList.add('body-wrapper__main--js-is');
  }
  if (bodyManiac) {
    bodyManiac.classList.add('body-wrapper__maniac--js-is');
  }
  if (bodyManiacOrder) {
    bodyManiacOrder.classList.add('body-wrapper__maniac-order--js-is');
  }
  if (bodyRitual) {
    bodyRitual.classList.add('body-wrapper__ritual--js-is');
  }
  if (bodySecretsOfManshion) {
    bodySecretsOfManshion.classList.add('body-wrapper__secrets-of-mansion--js-is');
  }
  if (bodyFatalExperiment) {
    bodyFatalExperiment.classList.add('body-wrapper__fatal-experiment--js-is');
  }
  if (questsList) {
    questsList.classList.add('quests-list--js-is');
  }
  if (pageContentWrapper) {
    pageContentWrapper.classList.add('page-content__wrapper--js-is');
  }
  if (choiceQuestsList) {
    choiceQuestsList.classList.add('choice-quests-list-wrapper--js-is');
  }

  navigationButton.addEventListener('click', function () {
    if (!navigationButton.classList.contains('navigation-button--menu-open')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
})();

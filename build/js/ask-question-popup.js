'use strict';

(function () {
  var popup = document.querySelector('.modal-ask-question');
  var body = document.querySelector('.body');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');
  var pageContentWrapper = document.querySelector('.page-content__wrapper');
  var closeButton = document.querySelector('.modal-ask-question__close-button');

  var form = document.querySelector('.question-form');
  var buttonAskQuestion = document.querySelector('.button-ask-question');
  var checkbox = document.querySelector('.question-form__checkbox');
  var submitButton = document.querySelector('.button--submit-question');

  var nameInput = document.querySelector('.question-form__name-input');
  var nameInFocus = document.querySelector('.question-form__name-in-focus');
  var emailInput = document.querySelector('.question-form__email-input');
  var emailInFocus = document.querySelector('.question-form__email-in-focus');
  var invalidText = document.querySelector('.question-form__invalid-text');
  var questionInput = document.querySelector('.question-form__textarea');
  var text = document.querySelector('.question-form__moving-text');

  var openPopup = function () {
    popup.classList.add('modal-ask-question--open');
    body.classList.add('body--question-popup-open');
    pageHeader.classList.add('page-header__wrapper--question-popup-open');
    pageContent.classList.add('page-content--question-popup-open');
    pageContentWrapper.classList.add('page-content__wrapper--question-popup-open');
    pageFooter.classList.add('page-footer--question-popup-open');
  };

  var closePopup = function () {
    popup.classList.remove('modal-ask-question--open');
    body.classList.remove('body--question-popup-open');
    pageHeader.classList.remove('page-header__wrapper--question-popup-open');
    pageContent.classList.remove('page-content--question-popup-open');
    pageContentWrapper.classList.remove('page-content__wrapper--question-popup-open');
    pageFooter.classList.remove('page-footer--question-popup-open');
  };

  var onQuestionButtonMouseDown = function () {
    if (!popup.classList.contains('modal-ask-question--open')) {
      openPopup();
    }
  };

  var onQuestionButtonEnterPress = function (evt) {
    if (evt.key === 'Enter' && !popup.classList.contains('modal-ask-question--open')) {
      openPopup();
    }
  };

  var onCloseButtonMouseDown = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && popup.classList.contains('modal-ask-question--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!popup.contains(evt.target) && !buttonAskQuestion.contains(evt.target)) {
      closePopup();
    }
  };

  var formValidation = function () {
    buttonAskQuestion.addEventListener('mouseover', function () {
      buttonAskQuestion.innerHTML = '? Задать вопрос';
    });
    buttonAskQuestion.addEventListener('mouseout', function () {
      buttonAskQuestion.innerHTML = 'Задать вопрос';
    });

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        submitButton.disabled = false;
      } else if (!checkbox.checked) {
        submitButton.disabled = true;
      }
    });

    nameInput.addEventListener('focus', function () {
      // nameInFocus.classList.add('question-form__name-legend--focus');
      nameInFocus.style = 'display: block';
      nameInput.placeholder = '';
    });
    nameInput.addEventListener('blur', function () {
      // nameInFocus.classList.remove('question-form__name-legend--focus');
      nameInFocus.style = 'display: none';
      nameInput.placeholder = 'Имя';
    });

    emailInput.addEventListener('focus', function () {
      // emailInFocus.classList.add('question-form__email-legend--focus');
      emailInFocus.style = 'display: block';
      emailInput.placeholder = '';
    });
    emailInput.addEventListener('blur', function () {
      // emailInFocus.classList.remove('question-form__email-legend--focus');
      emailInFocus.style = 'display: none';
      emailInput.placeholder = 'E-mail';
    });

    emailInput.addEventListener('invalid', function () {
      emailInFocus.classList.add('question-form__email--invalid');
      // emailInput.classList.add('question-form__email-input--invalid');
      invalidText.style = 'display: block;';
      emailInput.style = 'border-color: #f2901d;';
      text.classList.add('question-form__moving-text--invalid');
    });

    form.addEventListener('submit', function () {
      localStorage.setItem('userName', nameInput.value);
      localStorage.setItem('userEmail', emailInput.value);
      localStorage.setItem('userQuestion', questionInput.value);
    });
  };

  buttonAskQuestion.addEventListener('click', onQuestionButtonMouseDown);
  buttonAskQuestion.addEventListener('keydown', onQuestionButtonEnterPress);
  window.addEventListener('keydown', onPopupEscPress);
  window.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', onCloseButtonMouseDown);
  formValidation();
})();

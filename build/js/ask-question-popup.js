'use strict';

(function () {
  var form = document.querySelector('.question-form');
  var buttonAskQuestion = document.querySelector('.button-ask-question');
  var checkbox = document.querySelector('.question-form__checkbox');
  var submitButton = document.querySelector('.button--submit-question');

  var nameInput = document.querySelector('.question-form__input--name');
  var nameLegend = document.querySelector('.question-form__name-legend');
  var emailInput = document.querySelector('.question-form__input--email');
  var emailLegend = document.querySelector('.question-form__email-legend');
  var invalidText = document.querySelector('.question-form__invalid-text');

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
  })

  nameInput.addEventListener('focus', function () {
    nameLegend.classList.add('question-form__name-legend--focus');
    nameInput.placeholder = '';
  });

  nameInput.addEventListener('blur', function () {
    nameLegend.classList.remove('question-form__name-legend--focus');
    nameInput.placeholder = 'Имя';
  });

  emailInput.addEventListener('focus', function () {
    emailLegend.classList.add('question-form__email-legend--focus');
    emailInput.placeholder = '';
  });

  emailInput.addEventListener('blur', function () {
    emailLegend.classList.remove('question-form__email-legend--focus');
    emailInput.placeholder = 'Имя';
  });

  emailInput.addEventListener('invalid', function () {
    emailLegend.classList.add('question-form__email-legend--invalid');
    emailInput.classList.add('question-form__email-input--invalid');
    invalidText.style = "display: block;"
  });
})();

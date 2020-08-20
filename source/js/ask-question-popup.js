'use strict';

(function () {
  var buttonAskQuestion = document.querySelector('.button-ask-question');

  buttonAskQuestion.addEventListener('mouseover', function () {
    buttonAskQuestion.innerHTML = '? Задать вопрос';
  });

  buttonAskQuestion.addEventListener('mouseout', function () {
    buttonAskQuestion.innerHTML = 'Задать вопрос';
  });
})();

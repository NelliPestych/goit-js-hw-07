'use strict';
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
let increment = 0;
let result = document.getElementById('value');
const buttonActionIncrement = document.querySelector(
  'button[data-action="increment"]',
);
buttonActionIncrement.addEventListener('click', inc => {
  const element = inc.target;
  increment += 1;
  element.textContent = increment;
  counterValue += 1;
  result.textContent = counterValue;
});

let decrement = 0;
const buttonActionDecrement = document.querySelector(
  'button[data-action="decrement"]',
);
buttonActionDecrement.addEventListener('click', dec => {
  const element = dec.target;
  decrement -= 1;
  element.textContent = decrement;
  counterValue -= 1;
  result.textContent = counterValue;
});

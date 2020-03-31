// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
let counterValue = 0;
let increment = 0;
document
  .querySelector('button[data-action="increment"]')
  .addEventListener('click', inc => {
    const element = inc.target;
    increment += 1;
    element.textContent = increment;
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
    // element.removeEventListener(event, handler[, phase])
  });

let decrement = 0;
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener('click', dec => {
    const element = dec.target;
    decrement -= 1;
    element.textContent = decrement;
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
    // element.removeEventListener(event, handler[, phase])
  });

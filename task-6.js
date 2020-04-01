'use strict';
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
const form = document.getElementById('validation-input');
const dataLength = form.dataset.length;
console.log(dataLength);
form.addEventListener('blur', paintBorder);
function paintBorder(event) {
  console.log(event.currentTarget.value.length);
  if (Number(event.currentTarget.value.length) === Number(dataLength)) {
    inputValid();
  } else if (Number(event.currentTarget.value.length) !== Number(dataLength)) {
    inputInvalid();
  }
}

function inputValid() {
  if (form.classList.contains('invalid') === true) {
    form.classList.replace('invalid', 'valid');
  } else if (form.classList.contains('valid') === false) {
    form.classList.add('valid');
  }
}

function inputInvalid() {
  if (form.classList.contains('valid') === true) {
    form.classList.replace('valid', 'invalid');
  } else if (form.classList.contains('invalid') === false) {
    form.classList.add('invalid');
  }
}

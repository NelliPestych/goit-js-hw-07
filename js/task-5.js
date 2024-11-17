function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо елементи
const changeColorButton = document.querySelector('.change-color');
const body = document.body;
const colorSpan = document.querySelector('.color');

// Додаємо слухач події на кнопку
changeColorButton.addEventListener('click', () => {
  // Генеруємо випадковий колір
  const randomColor = getRandomHexColor();

  // Змінюємо фон <body>
  body.style.backgroundColor = randomColor;

  // Відображаємо значення кольору у <span>
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Знаходимо потрібні елементи
const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Додаємо слухач події для кнопки Create
createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  // Перевіряємо, чи значення в межах 1-100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створюємо квадрати
    input.value = '';    // Очищаємо значення в інпуті
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Додаємо слухач події для кнопки Destroy
destroyButton.addEventListener('click', destroyBoxes);

// Функція для створення квадратів
function createBoxes(amount) {
  destroyBoxes(); // Видаляємо попередні елементи перед створенням нових
  const fragment = document.createDocumentFragment(); // Використовуємо фрагмент для оптимізації

  let size = 30; // Початковий розмір

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div'); // Створюємо новий div
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    box.style.display = 'inline-block';

    fragment.appendChild(box); // Додаємо div у фрагмент
    size += 10; // Збільшуємо розмір для наступного елемента
  }

  boxesContainer.appendChild(fragment); // Додаємо всі елементи в контейнер за одну операцію
}

// Функція для очищення контейнера
function destroyBoxes() {
  boxesContainer.innerHTML = ''; // Очищаємо контейнер
}

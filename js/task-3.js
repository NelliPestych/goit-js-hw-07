// Отримуємо посилання на елементи
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухач події input
nameInput.addEventListener('input', (event) => {
    // Отримуємо значення з інпуту та очищаємо його від пробілів
    const inputValue = event.target.value.trim();

    // Якщо інпут порожній, виводимо "Anonymous", інакше виводимо введений текст
    nameOutput.textContent = inputValue || 'Anonymous';
});

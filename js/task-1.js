// Отримуємо список категорій
const categoriesList = document.querySelector('#categories');

// Отримуємо всі елементи з класом "item"
const items = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${items.length}`);

// Перебираємо кожен елемент "item"
items.forEach((item) => {
    // Отримуємо заголовок категорії
    const categoryName = item.querySelector('h2').textContent;

    // Отримуємо кількість елементів у категорії
    const elementsCount = item.querySelectorAll('ul li').length;

    // Виводимо дані в консоль
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
});

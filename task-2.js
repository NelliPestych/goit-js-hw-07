// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM-узлов
// используй document.createElement().

const element = document.getElementById('ingredients');
const fragment = document.createDocumentFragment();
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  fragment.appendChild(li);
});

element.appendChild(fragment);

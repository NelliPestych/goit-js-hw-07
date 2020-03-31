// 2-е задание createDocumentFragment
const items = document.querySelectorAll('.item');
[...items].forEach((num, el) => {
  console.log(num, el, num.querySelectorAll('li').length);
  console.log(
    (num.querySelector('h2').innerHTML += ` Количество элементов: ${
      num.querySelectorAll('li').length
    }`),
  );
});

// console.log(elem.querySelectorAll(selector));
// el.querySelectorAll('.li').length;

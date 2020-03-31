// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
let output = document.getElementById('text').style;
let input = document.getElementById('font-size-control');
input.value = 18;
input.addEventListener('input', handleInputChange);

function handleInputChange() {
  output.fontSize = input.value + 'px';
}

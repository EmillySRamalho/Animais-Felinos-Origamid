const menu = document.querySelector('.menu');
console.log(menu.classList);

menu.classList.add('ativo', 'teste');
console.log(menu.classList);

menu.classList.remove('teste');
console.log(menu.classList);

menu.classList.remove('teste2');
console.log(menu.classList);

if (menu.classList.contains('teste2')) {
  menu.classList.add('possui teste2');
} else {
  menu.classList.add('nao-possui-teste2');
}

const animais = document.querySelector('.animais');
console.log(animais.attributes['id']);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));
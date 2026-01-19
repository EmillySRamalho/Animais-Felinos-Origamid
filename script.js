const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista');

console.log(h1.innerText);
console.log(h1.outerHTML);

h1.outerHTML = '<p>Felinos</p>'
console.log(animaisLista.innerText);

const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement)
console.log(lista.parentElement.parentElement)
console.log(lista.nextElementSibling)
console.log(lista.previousElementSibling)

console.log(lista.children[lista.children.length -1])

console.log(lista.childNodes)

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const animais = document.querySelector('.animais');

contato.insertBefore(animais, titulo);

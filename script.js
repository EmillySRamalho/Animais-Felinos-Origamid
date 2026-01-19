const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-lista')

console.log(h1.innerText);
console.log(h1.outerHTML);

h1.outerHTML = '<p>Felinos</p>'

console.log(animaisLista.innerText);


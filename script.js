const img = document.querySelector('img')

function callback(){
  console.log('Clicou na imagem')
}

img.addEventListener('click', callback)

function callback2(event){
  console.log(event)
} 

img.addEventListener('click', callback2)

const animais = document.querySelector('.animais-lista')
function callback3(event){
  console.log(event.target)
  console.log(event.currentTarget)
  console
}

animais.addEventListener('click', callback3)

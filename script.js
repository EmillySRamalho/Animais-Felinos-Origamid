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
  console.log(event.type)
  console.log(this)
}

animais.addEventListener('click', callback3)

const h1 = document.querySelector('h1')

function handleEvent(event){
  console.log(event.type, event)
} 

h1.addEventListener('click', handleEvent)
h1.addEventListener('mouseenter', handleEvent)
h1.addEventListener('mousemove', handleEvent)
h1.addEventListener('mouseout', handleEvent)

window.addEventListener('scroll', handleEvent)
window.addEventListener('resize', handleEvent)


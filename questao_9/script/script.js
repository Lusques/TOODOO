let button = document.querySelector('.button_container')
let variavel = 'Hello World!'
console.log(variavel)
variavel = 'Hello Toodoo!'
console.log(variavel)

button.addEventListener('click', ()=>{
  console.log(variavel)
})
let sorvete_de_chocolate = document.getElementById('sabor').value
let button = document.querySelector('.button')

function sentenca(sentenca){
  let palavras = sentenca.split(' ')
    for (i in palavras){
      let palavra = palavras[i].toLowerCase()
      if ( palavra == 'chocolate'){
        return 'Amo sorvete de chocolate'
      }
    }
    return 'Prefiro outros sabores'
}

button.addEventListener('click', ()=>{
  sorvete_de_chocolate = document.getElementById('sabor').value
  if(sorvete_de_chocolate == 'chocolate'){
    alert('Amo sorvete de chocolate')
  }
  else{
    alert(sentenca(sorvete_de_chocolate))
  }
})
let num = document.querySelector('input#fnum')
let lisa = document.querySelector('select#flista')
let res = document.querySelector
('div#res')
let valores = []

function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return  false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else { 
    return false 

  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
valores.push(Number(num.value))
let item = document.createElement('option')
item.text = `Valor ${num.value} adicionado.`
inLista.appendChild(item)

  }else{
    window.alert('valor invalido ou ja encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar( ) {
  if (valores.length == 0) { 
    window.alert('Adicionar valores antes de finalizar')
  } else{ let tot = valores.length
    res.innerHTML =''
    res.innerHTML += '<p> ao todo, te,os ${}'

  }
}

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
function inLista(n, ){
  if (1.indexOf(Number(n)) != -1) {
    return true
  } else {

  }
}


function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){
    window.alert('tudo ok')

  }else{
    window.alert('valor invalido ou ja encontrado na lista.')
  }

}
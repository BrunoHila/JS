function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      genero = 'Homem'
    document.body.style.background = 'cornflowerblue'

      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'm.bebe.png')
      } else if (idade < 25) {
        img.setAttribute("src", "h.jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "homem.png");
      } else {
        img.setAttribute("src", "idoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
    document.body.style.background = 'pink'

      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "bebe.png");
      } else if (idade < 25) {
        img.setAttribute("src", "jovem.png");
      } else if (idade < 50) {
        img.setAttribute("src", "mulher.png");
      } else {
        img.setAttribute("src", "idosa.png");
      }

    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

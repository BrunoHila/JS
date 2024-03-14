var agora = new Date();
var diaSem = agora.getDay();
console.log(diaSem);
switch (diaSem) {
  case 0:
    console.log("domngo");
    break;
  case 1:
    console.log("segunda");
    break;
    case 2:
      console.log('terca')
      break
      case 3:
        console.log('quarta-feira')
        break
        case 4:
          console.log('quinta')
          break
          case 5:
          console.log('sexta')
          break
          case  6:
            console.log('sabado')
            break
}

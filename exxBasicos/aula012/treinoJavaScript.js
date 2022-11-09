
var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

if(diaSem == 0) {
    console.log('Hoje é domingo,')
}
else if(diaSem == 1) {
    console.log('Hoje é segunda-feira,')
  }
  else if(diaSem == 2 ) {
      console.log('Hoje é terça-feira,')
  }
  else if(diaSem == 3 ) {
      console.log('Hoje é quarta-feira,')
  }
  else if(diaSem == 4 ) {
      console.log('Hoje é quinta-feira,')
  }
  else if(diaSem == 5 ) {
      console.log('Hoje é sexta-feira,')
  }
  else if(diaSem == 6 ) {
      console.log('Hoje é sabádo,')
  }
else {
    console.log('[DIA ERRO]')
}

if ( hora == 0) {
    console.log(`${hora} hora, Boa madrugada`)
} else if (hora >= 1  & hora <=4) {
    console.log(`são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos, Boa madrugada.`)
} else if (hora >= 5 & hora <=12 ) {
    console.log(`Bom-dia, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos.`)
} else if (hora >= 13 & hora <=18 ) {
    console.log(`Boa-tarde, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos.`)
} else if (hora >= 19 & hora <=24) {
    console.log(`Boa-noite, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos.`)
}
switch(diaSem) {

    case 0:
        console.log('Tenha um bom domingo.')
        break

    case 1:
        console.log('Tenha uma boa segunda-feira.')
        break
    case 2:
        console.log('Tenha uma boa terça-feira.')
        break
    case 3:
        console.log('Tenha uma boa quarta-feira.')
        break
    case 4:
        console.log('Tenha uma boa quinta-feira.')
        break
    case 5:
        console.log('Tenha uma boa sexta-feria.')
        break
    case 6:
        console.log('Tenha um bom sabádo.')
        break
    default:
        console.log('Não entendi!!')
}

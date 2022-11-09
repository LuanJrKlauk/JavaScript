var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
if ( hora == 0) {
    console.log(`Hoje é ${diaSem}, são exatamente ${hora} horas, Boa madrugada`)
} else if (hora >= 1  & hora <=4) {
    console.log(`Hoje é ${diaSem}, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos, Boa madrugada.`)
} else if (hora >= 5 & hora <=12 ) {
    console.log(`Hoje é ${diaSem}, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos, Bom-dia.`)
} else if (hora >= 13 & hora <=18 ) {
    console.log(`Hoje é ${diaSem}, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos, Boa-tarde.`)
} else if (hora >= 19 & hora <=24) {
    console.log(`Hoje é ${diaSem}, são exatamente ${hora} horas e ${minutos} minutos e ${segundos} segundos, Boa-noite`)
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
    default:
        console.log('Não entendi!!')
}

var agora = new Date()

var diaSem = agora.getDay()

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

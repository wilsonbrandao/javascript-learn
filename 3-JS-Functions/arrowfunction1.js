let dobro = function (a) {
    return 2 * a
}

//Função Arrow sempre é uma função anonima e deve ser armazena em uma variavel
dobro = (a) => {
    return 2 * a
}

// forma reduzida
dobro = a => 2 * a //não precisa de parenteses quando tem somente 1 paramentro e o parametro é implicito quando somente 1 linha
console.log(dobro(Math.PI))

let Ola = function (){
    return 'Olá'
}

Ola = () => 'Olá'
Ola = _ => 'Olá'
console.log(Ola())


const valor = 'Global'

function minhafuncao() {
    console.log(valor) //executa a função e procura a varial neste local (global)
}

function exec() {
    const valor = 'Local'
    minhafuncao() //chama a função
}

exec() 
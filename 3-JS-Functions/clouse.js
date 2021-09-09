// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular as variáveis externas à função

//contexto léxico em ação

const x = 'Global'

function fora(){ //função que retorna uma função
    const x = 'Local'
    function dentro(){ 
        return x
    }
    return dentro
}
const minhaFuncao = fora() //armazena o retorno em uma constante
console.log(minhaFuncao())
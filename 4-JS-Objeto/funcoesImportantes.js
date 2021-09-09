const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 13
}
//funções importantes
console.log(Object.keys(pessoa)) //Retorna array todas as chaves do Object
console.log(Object.values(pessoa)) //Retorna um array todos os valores do Object
console.log(Object.entries(pessoa)) //Retorna um  array de arrays com as chaves e os valores do Object em cada array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//usando o retorna da função Objects.entries com a função forEach do array
Object.entries(pessoa).forEach(([chave, valor])=> {
    console.log(`${chave}: ${valor}`)
})
//definindo parametros de propriedades para um novo atributo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //aparece quando chamado a função keys
    writable: false, //Não pode mudar o valor
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '31/05/2022'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015) ---> Básicamente ele pega dois ou mais objetos e mescla em um outro objeto
const dest = { a:1}
const obj1 = {b:2}
const obj2 = {c:3, a: 4}
const obj = Object.assign(dest, obj1, obj2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)


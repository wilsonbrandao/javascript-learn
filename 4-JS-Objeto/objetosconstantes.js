// pessoa -> endereço de memoria 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} //não pode atribuir novamente um novo objeto

Object.freeze(pessoa) //copngela o objeto
pessoa.nome = 'Maria' //não pode alterar atributo existente
pessoa.end = 'Rua ABC' //Não pode adicionar novo atributo
delete pessoa.nome //não pode deletar atributo
console.log(pessoa.nome) 
console.log(pessoa) 

const pessoaConstante = Object.freeze({nome: 'João'}) //criar objeto constante
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante) 






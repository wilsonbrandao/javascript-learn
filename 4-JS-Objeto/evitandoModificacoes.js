// Object.preventExtensions (pode deletar, mas n pode adicionar atributos)

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) //Verifica se o object é extensível (pode ter novos atributos)

produto.nome = 'Borracha' //pode alterar o valor
produto.decricao = 'Borracha escolar branca' //não pode criar novo atributo
delete produto.tag //pode deletar atributos
console.log(produto)

//Object.seal (não pode deletar nem adicionar atributo)
const pessoa = {
    nome: 'Juliana',
    idade: '35' 
}

Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" //não pode criar novo atritudo
delete pessoa.nome //não pode deletar atributos
pessoa.idade = 29 //Pode alterar o valor do atributo
console.log(pessoa)


// Object.freeze = seal + preventExtends
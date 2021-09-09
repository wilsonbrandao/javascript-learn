const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10
console.log(valores)
console.log(valores.length) //a variavel length vai dizer quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste'); //função push serve para adicionar outros elementos ao array
console.log(valores)

console.log(valores.pop())  //função pop serve para retirar o ultimo valor do array
delete valores[0] //deletar elementos do array
console.log(valores)

console.log(typeof valores) //Arrays são do tipo objeto
const fabricantes = ["Mercedes","Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1} = ${nome}`)
}

// A função forEach retorna o valor e o indice do array "Array.forEach(Valor, Indice)""
fabricantes.forEach(imprimir)
fabricantes.forEach(function(param1){
    console.log(param1)
})
fabricantes.forEach((param1) => console.log(param1))

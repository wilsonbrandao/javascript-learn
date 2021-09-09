const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasBaixas = []
    for ( let i in notas){ //percorrer array de notas
        if (notas[i] < 7){ //testar se cada item é menor q 7
            notasBaixas.push(notas[i]) //a função array.push(valor a ser puxado) armazena um valor em um array
        }
    }

    console.log(notasBaixas)
    
    //com callback 
    const notasBaixas2 = notas.filter(nota => nota < 7) //se a resposta da função callback der True ele armazena no novo array else não
    console.log(notasBaixas2)

    const notasBaixas3 = notas.filter(function (nota) {return nota  < 7}) //se a nota for < 7 é True else False 
    console.log(notasBaixas2)
    

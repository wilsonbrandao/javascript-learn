const notas = (nota) => {
    let notaAredondada
    if (nota < 0 || nota > 100) return console.log('nota inválida')

    if (nota < 38){
        return console.log('Aluno Reprovado com nota: ' + nota)
    }else {
        if ((nota%5) >= 3){
            notaAredondada = (5 - nota%5) + nota
        }
        if (notaAredondada < 40){
            return console.log('Aluno Reprovado com nota: ' + notaAredondada)
        }else{
            return console.log('Aluno Aprovado com nota: ' + notaAredondada)
        }
    }
}

notas(110)
notas(37)
notas(38)
notas(83)


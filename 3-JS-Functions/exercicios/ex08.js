let string = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function compara(string){
    let pontuacao = string.split(",")
    let records = 0
    let piorjogo = 1
    let maiorpontuacao = pontuacao[0]
    let menorpontuacao = pontuacao[0]

    for(let i = 0; i < pontuacao.length;i++ ){
        if(pontuacao[i] > maiorpontuacao) {
            maiorpontuacao = pontuacao[i]
            records = record + 1
            return console.log(record)
        }else if(pontuacao[i] < menorpontuacao){
            menorpontuacao = pontuacao[i]
            piorjogo = i+1;
        }
    }
    return [records, piorjogo]
}

console.log(compara(string))
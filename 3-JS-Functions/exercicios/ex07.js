const baskara = (ax2, bx, c) => {
    if (ax2 = 0){
        console.log('Essa não é uma equação de segundo grau válida')
    }else{
        let equacao = Math.pow(ax2, 2)
        equacao = equacao - bx + c
        console.log(equacao)

        let delta = (bx * 2) - 4 * ax2 * c
        let x1 = (-bx+(Math.sqrt(delta))) / (2 * ax2)
        let x2 = (-bx+Math.sqrt(delta)) / (2 * ax2)
        console.log(x1, x2)

        /*if (equacao < 0){   
            console.log('Delta negativo')
        }else 
            console.log(equacao)*/
    }
}

baskara(-1,12,13)


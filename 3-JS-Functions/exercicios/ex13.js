const diautil = dia => {
    switch(dia){
        case 1: case 7:
            console.log('Fim da Semana'); break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia útil'); break;
        default: 
            console.log('Dia inválido')
    }
}

diautil(1)
diautil(2)
diautil(3)
diautil(3)
diautil(5)
diautil(6)
diautil(7)
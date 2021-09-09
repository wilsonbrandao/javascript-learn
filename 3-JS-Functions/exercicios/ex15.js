const loja = carro => {
    switch(carro.toUpperCase()){
        case 'HATCH':
            console.log('Compra efetuada com sucesso');
             break;
        case 'SEDAN': case 'MOTOCICLETA': case 'CAMINHONETE':
            console.log('Tem certeza que não prefere outro modelo?');
             break;
        default: console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}

loja('sedan')
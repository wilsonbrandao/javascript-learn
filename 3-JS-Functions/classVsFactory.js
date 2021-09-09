//Criação de Object com Class
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    //método
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

//Crianção de Object com Função Factory
const p1 = new Pessoa('Wilson')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Wil')
p2.falar()

//criação de Object com Função Construtora
//Criação de Object com Função Construtora
function Pessoa(nome) {
    this.nome = nome
    //método
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('WIlson')
p1.falar()

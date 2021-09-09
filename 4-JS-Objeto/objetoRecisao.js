//Coleção dinanmica de pares chave/valor
const produto = new Object //Object é uma função construtora padrão  da linguagem
produto.nome = 'Cadeira' //Notação ponto
produto['marca do produto'] = 'Generica' //Notação colchetes
produto['preco'] = 220

console.log(produto)
delete produto.preco // apagar atributo do objeto instanciado (produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { //Criar object dentro de object
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //Criar array de objects
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){ //funções de objects
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //retornar undefind pois condutores foi excluido logo n existe
/*console.log(carro.condutores.length) */ //da erro

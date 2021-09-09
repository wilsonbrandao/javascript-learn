// Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object) //Object é uma função construtora padrão, new Object é um objeto
const obj2 = new Object;
console.log(obj2)

//Funcões construtoras
function produto (nome, preco, desc){
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new produto('Caneta', 7.99, 0.15) //new é um atributo para criar object através de funções construtoras
const p2 = new produto('Notbook', 2998.99, 0.25) 
console.log(p1.getPrecoComDesconto().toFixed(2), p2.getPrecoComDesconto().toFixed(2))

//Funcões Factory (Função que retorna um objeto)
function criarfuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarfuncionario('João', 7980, 4) //criando e instanciando object através da função factory
const f2 = criarfuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1, f2)

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famosa que retorna Object...
const fromJSON = JSON.parse('{"info": "Sou um JSON", "nome": "Gael"}') 
console.log(fromJSON)
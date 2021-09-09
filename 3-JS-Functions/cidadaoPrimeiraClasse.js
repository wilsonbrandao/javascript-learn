

//criar função literal 
function fun1() { }

// armarezar fnção em varialvel 

const fun2 = function () {} //declara a função anonima

// Armazenar função em Array

const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar função em atributo de objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar função como parametro

function run(fun) {
    fun()
}

run(function(){console.log('Executando...')})

//Uma função pode retonar/conter uma função

function soma (a,b){
    return function(c){
        console.log(a + b + c)
    }
}
soma(2,3)(12)

const armazenar = soma(2,3)
armazenar(4)
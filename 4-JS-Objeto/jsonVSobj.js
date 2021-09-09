//JSON é um formato de dados, utilizado para interoperabilidade entre sistemas

const obj = {
    a: 1,
    b: 2, 
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj)) //transforma obj em JSON

console.log(JSON.parse('{ "a":1,"b":2,"c":3 }')) //tranforma JSON em obj
console.log(JSON.parse('{ "a":1,"b":"string","c": true, "d": {}, "e": [] }')) //tranforma JSON em obj
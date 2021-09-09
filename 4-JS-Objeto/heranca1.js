const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) //todo objeto criado de forma literal ou com new Object aponta para Object.prototype
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //Apronta para null pois, Object.prototype é o escopo maior de JS
console.log(Object.prototype.__proto__ == null) //Apronta para null pois, Object.prototype é o escopo maior de JS

function MyObject() {} //toda função em JS tem um prototype
console.log(typeof Object, typeof MyObject)
console.log(Object.prototype, MyObject.prototype) 

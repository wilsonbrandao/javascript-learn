// Function declaration

function sayHello(){
    console.log('Hello World!')
}

sayHello()
//____________________________________
function sayHelloTo(name) {
    console.log('Hello ' + name)
}

sayHelloTo('Mike')
//____________________________________
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('World')
//____________________________________
function returnHi(){
    return 'Hi!'
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())
//____________________________________
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('John'))

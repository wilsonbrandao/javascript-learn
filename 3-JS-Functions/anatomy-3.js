//function expression
const increment1 = function(n){
    return n + 1
}

//arrow Function is always anonymous
const increment2 = (n) => {
    return n + 1
}
//arrow Function with one parameter only
const increment3 = n => {
    return n + 1
}
//arrow Function with one line only
const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment4(199))

//arrow Function with two or more parameters ( parameters )
const sum = (a, b) => a + b 
console.log(sum(3, 8))
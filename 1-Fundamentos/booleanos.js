let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo) //false
console.log(!!isAtivo) //true

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //string com espaço em branco
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log('' || null || 0 || 'epa') //Se pelo menos uma expressão for true a impressão será true.

let nome = '' //variavel com valor false
console.log(nome || 'Desconhecido') //como a variavel nome é false, será impresso a próxima informação (que no caso é a String)
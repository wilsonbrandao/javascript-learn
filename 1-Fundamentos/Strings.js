const escola = "Cod3r"

console.log(escola.charAt(4)) //função para pegar um determinado caractere dentro da String
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Pegar o código do caractere
console.log(escola.indexOf(3))// Pegar o indice do caractere 

console.log(escola.substring(1)) //chamada de um caractere 
console.log(escola.substring(0, 3)) //me de trÊs caracteres após o 0

console.log('Escola '.concat(escola).concat("!")) //concatenar
console.log('Escola ' + escola + "!") //concatenar
console.log(escola.replace(3, 'e')) // é a mesma coisa de concatenar

console.log('Ana,Maria,Pedro'.split(',')) //gerar um array usando ',' como separador
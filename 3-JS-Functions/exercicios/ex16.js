const calculadora = (num1, operador, num2) => {
    switch(operador){
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
        case '/':
            console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`)
        break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
        default: console.log('Operação Inválida')
    }
}

calculadora(5,'/',3)
calculadora(5,'+',3)
calculadora(5,'-',3)
calculadora(5,'*',3)
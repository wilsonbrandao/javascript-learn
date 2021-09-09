var a = 3;
let b = 4;

var a = 30;
b = 40;
/* Sempre usar LET ao invés de VAR: Let não deixa redeclarar 
a variavel no mesmo escopo, já com Var podemos ter esse problema */
a = 300;
b = 400;
console.log(a, b);

// Não é possivel redeclarar uma constante
const c = 5;
// c = 50
console.log(c);
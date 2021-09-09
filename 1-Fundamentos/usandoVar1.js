//variavell fora da funcao é uma variavel global, e pode ter problema se a mesma for subscrita.
{
    {
        {
            { var sera = 'será???'};
        }
    }
}
console.log(sera)
//varialvel dentro da função não é visivel fora da funcao
function teste(){
    var local = 123
}
teste()
console.log(local)
  const a = 1
  const b = 2
  const c = 3

  //notação antiga para atribuir variaveis ao valor do atributo
  const obj1 = { 
    a: a, 
    b: b, 
    c: c
  }  
  //notação nova para atribuir variaveis ao valor do atributo
  const obj2 = { 
    a,
    b,
    c
  }   
  console.log(obj1, obj2)

  //notação colchetes para atribuição de atributos
  const nomeAttr = 'nota'
  const valorAttr = 7.87

  const obj3 = {}
  obj3[nomeAttr] = valorAttr
  console.log(obj3)

  const obj4 = {[nomeAttr]: valorAttr}

  //Criação de atributos de função 
  const obj5 = {
      funcao1: function(){ //function expression forma antiga de criar atributos de funções
        //...
      },
      funcao2() { //nova forma de atribuir funcao a um atributo
        //...
      }
  }

  console.log(obj5)
// ***** var *****
// Escopo de função: Dá erro quando acessada fora do escopo da função //
function f() {
  var nome = 'Vitor'
}
console.log(nome) // acessar var fora da função dá erro

if(0 === 0) {
    var x = 0
}
console.log(x)  // acessar var fora de outros blocos funciona

// Pode ser reatribuída //
var nome = 'Vitor'
var nome = 'João'
console.log(nome) 

// Sofre efeito do Hoisting e é inicializada como undefined
console.log(nome) // é içada pelo compilador antes da execução e inicializada como undefined
var nome          // var nome = undefined 
nome = 'Vitor'

// *****************************************************************************************

// ***** let *****
// Escopo de bloco: Dá erro quando acessada fora de QUALQUER bloco //
function f() {
    let nome = 'Vitor'
}
console.log(nome) // ReferenceError: nome is not defined
  
if(0 === 0) {
    let x = 0
}
console.log(x)  // ReferenceError: x is not defined

// Não pode ser redeclarada, mas pode ser reatribuída //
let nome = 'Vitor'
let nome = 'João' // SyntaxError: Identifier 'nome' has already been declared
nome = 'Maria'
console.log(nome) 

// Sofre efeito do Hoisting mas não é inicializada //
// Deve ser declarada na ordem correta, senão gera erro.
console.log(nome) // ReferenceError: Cannot access 'nome' before initialization
let nome 
nome = 'Vitor'

// *****************************************************************************************

// ***** const *****
// Escopo de bloco: Dá erro quando acessada fora de QUALQUER bloco //
function f() {
    const nome = 'Vitor'
}
console.log(nome) // ReferenceError: nome is not defined
  
if(0 === 0) {
    let x = 0
}
console.log(x)  // ReferenceError: x is not defined

// Não pode ser redeclarada nem reatribuída //
const nome = 'Vitor'
const nome = 'João' // SyntaxError: Identifier 'nome' has already been declared
nome = 'Maria'      // TypeError: Assignment to constant variable.
console.log(nome) 

// Sofre efeito do Hoisting mas não é inicializada
// É obrigatório que você inicialize a variável
// Deve ser declarada na ordem correta, senão gera erro.
console.log(nome) // ReferenceError: Cannot access 'nome' before initialization
const nome        // SyntaxError: Missing initializer in const declaration
nome = 'Vitor'

// Não é possível alterar a atribuição de uma const, mas é possível alterar
// as propriedades de um objeto const
const pessoa = {
    nome: 'Vitor',
    idade: 26,
    altura: 174
}

pessoa.idade = 27


// ********************************************************************************
// *********************************  this  ***************************************
// ********************************************************************************
// No node vem ativado por padrão 
// No navegador não vem ativado
"use strict" 


// ***** Context Inside a Function *****
// não pega o this global se o strict mode estiver ativado
this.name = 'Vitor'
function sayMyName() {
    console.log(this.name) // undefined
}
sayMyName()

// ***** Context Inside a method *****
// não pega o this global independente de o strict mode estiver ativado ou não
this.name = 'João'
const dev = {
    name: 'José',
    sayMyName: function() {
        console.log(this.name)
    }
}
dev.sayMyName() // José


// ***** call(this, arg1, arg2, argN) *****
// Passa para a função o this do contexto de onde for enviado
this.name = 'Camila'

function sayMyName(age) {
    this.age = age
    console.log(this.name, this.age) 
}

const dev = {
    name: 'José'
}

sayMyName.call(this, 18)  // 'Camila', 18
sayMyName.call(dev, 21)   // 'José', 21


// ***** apply(this, [arg1, arg2, argN]) *****
// As diferença pro call é que recebe um array de argumentos e 
// pode acessar eles pelo arguments

this.name = 'Camila'

function sayMyName() {
    this.age = arguments[0]
    this.height = arguments[1]
    this.weight = arguments[2]
    console.log(this.name, this.age, this.height, this.weight) 
}

const dev = {
    name: 'José'
}

sayMyName.apply(this, [18, 1.6, 55])


// ***** bind(this, [arg1, arg2, argN]) *****
// Retorna a função chamada, porém ligada ao contexto de onde foi enviada
this.name = 'Camila'

function sayMyName(age) {
    this.age = age
    console.log(this.name, this.age) 
}

const dev = {
    name: 'José'
}

const boundSayMyName = sayMyName.bind(dev)
boundSayMyName(19)
// ou 
sayMyName.bind(dev)(20)
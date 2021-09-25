// Argumentos da função
function teste() {
    for(let arg in arguments) // arguments é um array que contém todos os argumentos passados
        console.log(arg)
}

// Function Declaration: 
function soma(a, b) {
    return a + b
}

// ***** Function Expression: Armazena uma função em uma variável *****
const soma = function (a, b) { // function sem definir nome é uma função anônima
    console.log(a + b)
}

// ***** Arrow Functions ***** EDITAR (06/03)
// Sintaxe mais curta do que Function Expression
// Caso 1: Função sem parâmetros
function data() {
    return new Date()
}

const data_hoje = new Date


const soma = (a, b) => {
    return a + b
}

// Retorno implícito
const subtracao = (a, b) => a - b


// ***** Factory Function *****
// Utiliza camelCase
// Criar uma factory function que crie objetos de celular
const celular = {
    marca: 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    bateria: 5000,
    ligar: function() {
        console.log('fazendo ligação...')
    }
}

function criarCelular(marcaCelular, tamanhoTela, bateria) {
    return {
        marcaCelular,
        tamanhoTela,
        bateria,
        ligar() {
            console.log('fazendo ligação...')
        }
    }
}
// criando o objeto
const new_celular = criarCelular('Xiaomi', 5.5, 5000)
console.log(new_celular)


// *****  Constructor Function *****
// Utiliza PascalCase
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.eyeColor = eyeColor
}
// criando o objeto
let Father = new Person("John", "Doe", 50, "blue")
console.log(Father)
// ****** OBS: Factory Function e Constructor Function fazem a mesma coisa
// Escolha uma forma de usar e siga sempre o mesmo padrão


this.name = 'Valeska'

function sayMyName() {
    console.log(this.name) 
}
sayMyName()


this.name = 'Valeska'
const user = {
    sayMyName: function() {
        console.log(this.name)
    }
}

user.sayMyName()


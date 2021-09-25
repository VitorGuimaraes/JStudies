// Criando objeto vazio e inserindo atributos depois
const produto = {}
produto.nome = 'Celular'
produto.preco = 1440.75
produto['Desconto'] = 0.4 // Outra forma de criar propriedades do objeto


// Criando o objeto e os atributos de uma vez só
const funcionario = {
    nome: 'João',
    cpf: '064.452.789-87',
    salario: 2796.75
}

// Chaves do objeto
console.log(Object.keys(funcionario))
// Valores do objeto
console.log(Object.values(funcionario))
// Array com chaves e valores do objeto
console.log(Object.entries(funcionario))

// Remover atributo de um objeto
delete funcionario.salario

// ***** Clonar objetos *****
const pessoa = {
    nome: 'Marcos',
    altura: 1.74,
    peso: 65
}

// Modo 1
const copyPessoa = Object.assign({}, pessoa)
console.log(copyPessoa)

// Flexibilidade para adicionar novos atributos ao objeto
const newPessoa = Object.assign({idade: 19}, pessoa)
console.log(newPessoa)

// Modo 2
const copy = {...pessoa}
console.log(copy)


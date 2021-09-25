// Switch Case
let permissao
permissao = 'gerente'

switch (permissao) {
    case 'comum':
        console.log('Usuário comum')
        break;

    case 'gerente':
        console.log('Usuário gerente')
        break;
    
    default:
        console.log('Usuário não encontrado')
}

// While 
let i = 0
while(i < 5) {
    i += 1
}

// ******************** Laços For ********************
const pessoa = {
    nome: 'Vitor',
    sobrenome: 'Guimarães',
    idade: 26,
    altura: 174,
    cpf: '999.754.000-53',
    rg: '2006000565-3'
}

const arr = ['a', 'b', 'c', 'd', 'e']

// ***** For ***** 
// Itera os elementos de um ARRAY partir do índice
// Ignora propriedades não numéricas do array!
// Não pula elementos vazios  :(
for(let i = 0; i < arr.length; i++)
    console.log(i, arr[i])

// ***** ForEach ***** *****
// Tem acesso aos índices e elementos do ARRAY
// Ignora propriedades não numéricas do array :D
// Pula elementos vazios                      :D
arr.forEach(function (item, index) {
    console.log(item, index)
    arr[index] = newValue // Substituir elementos do array
})

// For...Of
// É a maneira mais robusta de iterar um ARRAY :D :D :D 
// Tem acesso aos elementos do ARRAY
// Ignora propriedades não numéricas do array :D
// Não pula elementos vazios                  :(
for(const [index, value] of arr.entries())
    console.log(index, value)
    arr[index] = newValue // Substituir elementos do array

// ***** For...In ***** 
// Indicado para iterar OBJETOS
// Itera sobre elementos de um ARRAY e propriedades de um OBJETO 
// Não ignora propriedades não numéricas do ARRAY!!! Evite usar em arrays :(
// A ordem da iteração em um ARRAY não é garantida                        :( 
// Pula elementos vazios                                                  :D
for(let key in pessoa) {
    if (obj.hasOwnProperty(prop)) 
        console.log(key, pessoa[key])
}
// hasOwnProperty method allows you to enumerate only own properties. 
// That's it, only the properties that the object physically has, no inherited properties
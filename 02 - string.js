let string = 'javascript'

// Retorna o tamanho da string
string.length

// Retorna o caractere de uma determinada posição
string.charAt(1)

// Concatena strings
string.concat(' é show!')
string + ' é show!'

// Substitui caracteres da string
// (regex, new_value)
string.replace('script', ' ')

// Split
let fruits = 'banana, maçã, melancia, mamão'
fruits.split(',')


// ************************************************************************
// *** ENCONTRANDO POSIÇÕES EM UMA STRING ***
// Procura uma string específica e retorna sua posição. Aceita Regex
fruits.search('mamão')

// Procura uma string específica e retorna sua posição. Não aceita regex
fruits.indexOf('mamão')


// ************************************************************************
// *** EXTRAINDO PARTES DE UMA STRING ***

fruits.substring(8, 12)  // (start, end -> 'maçã'
fruits.substring(24)     // (start ->      'mamão' 

// Similar ao substring, mas também aceita índices negativos
fruits.slice(8, 12)    // (start, end -> 'maçã'
fruits.slice(-15, -7)  // (start, end -> 'melancia'

// Similar ao slice, mas o segundo parâmetro é o tamanho da substring extraída
fruits.substr(0, 6)   // (start, length -> 'banana'

// Template String
const aluno = 'Joao'
const idade = '23'
const curso = 'administração'

console.log(`${aluno} tem ${idade} anos e estuda ${curso}`)
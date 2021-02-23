let string = 'javascript'

// Retorna o tamanho da string
console.log(string.length)

// Retorna o caractere de uma determinada posição
console.log(string.charAt(1))

// Concatena strings
console.log(string.concat(' é show!'))
console.log(string + ' é show!')

// Substitui caracteres da string
// (regex, new_value)
console.log(string.replace('script', ' '))

// Split
let fruits =  'banana, maçã, melancia, mamão'
console.log(fruits.split(','))


// ************************************************************************
// *** ENCONTRANDO POSIÇÕES EM UMA STRING ***
// Procura uma string específica e retorna sua posição. Aceita Regex
console.log(fruits.search('mamão'))

// Procura uma string específica e retorna sua posição. Não aceita regex
console.log(fruits.indexOf('mamão'))


// ************************************************************************
// *** EXTRAINDO PARTES DE UMA STRING ***

console.log(fruits.substring(8, 12))  // (start, end) -> 'maçã'
console.log(fruits.substring(24))     // (start) ->      'mamão' 

// Similar ao substring, mas também aceita índices negativos
console.log(fruits.slice(8, 12))    // (start, end) -> 'maçã'
console.log(fruits.slice(-15, -7))  // (start, end) -> 'melancia'

// Similar ao slice, mas o segundo parâmetro é o tamanho da substring extraída
console.log(fruits.substr(0, 6))   // (start, length) -> 'banana'

// Template String
let aluno = 'Joao'
let idade = '23'
let curso = 'administração'

console.log(`${aluno} tem ${idade} e estuda ${curso}`)
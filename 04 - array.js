// Arrays são heterogêneos e mutáveis
// Embora seja heterogêneo, evite misturar tipos em arrays
let valores = [10, 3.5, 'banana', false]

// Acessando índices do array
valores[0]
valores[4] // vai dar undefined, pois o array só tem 4 posições

// Comprimento do array
valores.length

// Array de array
let array = [["a", "b", "c"], [1, 2, 3], ["uva", "maçã", "banana"]]
array[0][2] // acessando o terceiro elemento do primeiro array

// *****************************************************************
frutas = ["uva", "maçã", "banana"]

// Adicionar um item em um índice específico
// splice(index, 0, elements_to_add)
frutas.splice(0, 0, 'abacaxi') // Adiciona 'abacaxi' no índice 0
// Remover vários itens do array 
frutas.splice(2, 0, 'morango') // Adiciona 'morango' no índice 2

// Adicionar itens no início do array
frutas.unshift('melancia')
// Adicionar itens no final do array
frutas.push('mamão')
// Adicionar itens no final do array
frutas.push('manga', 'morango') // Pode adicionar um ou mais itens


// *****************************************************************

// Remover a partir de um índice
delete frutas[3]
// Remover um item do array pelo índice
// splice(start_index, n_elements_to_remove)
// *** O splice() retorna os itens removidos ***
frutas.splice(2, 1) // Remove o item 2
// Remover vários itens do array 
frutas.splice(1, 4) // Remove 4 itens a partir do índice 1
// Remover do início do array
frutas.shift()
// Remover um item do final do array
frutas.pop()


// Procurar um item pelo índice
frutas[2]

// Procurar o índice de um item no array
frutas.indexOf('melancia')

// Procurar a última ocorrência de um item no array
frutas.lastIndexOf('melancia') 

// Retorna o PRIMEIRO item que satisfizer a função de teste
let array = [10, 8, 12, 25, 2]
const found = array.find(function(element) {
    return element > 5
})
console.log(found)


// Verificar se um item existe no array
frutas.includes('melancia')

// Copiar um array
let copy = frutas.slice()

// Inverter o array
frutas.reverse()

// Ordenar o array
frutas.sort()

// Juntar todos os elementos do array em uma string
frutas.join() 



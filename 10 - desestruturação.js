// ***** Desestruturando Arrays *****
const arr = ["John", "Smith"]
const [firstName, surname] = arr

// Ignorar elementos usando vírgula
const [firstName, ,title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(title) // Consul

// Ignorar o restante dos elementos 
const [firstName, title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(firstName) // Julius
console.log(title)     // Caesar

// Armazenar o restante dos elementos
const [firstName, title, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
console.log(rest[0])   // Consul 
console.log(rest[1])   // of the Roman Republic

// Swap variáveis
const guest = "Jane"
const admin = "Pete"
// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest]

// ******************************************************************************************

// ***** Desestruturando Objetos *****
const options = {
    title: "Menu",
    width: 100,
    height: 200
  }

const {title, width, height} = options  
const {title: t, width: w, height: h} = options // renomeando os atributos

// Extraindo apenas propriedades desejadas
const {title} = options

// Armazena o restante das propriedades
let {title, ...rest} = options
console.log(rest.width)   // 100
console.log(rest.height)  // 200


// ***** Nested destructuring *****
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
}

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width,
    height
  },
  items: [item1, item2] // assign items here
} = options
console.log(width)
console.log(height)
console.log(item1)
console.log(item2)


// ***** Smart Function Parameters *****

function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log(title, width, height) // My Menu 200 100
  console.log(items) // Item1, Item2
}

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
}

showMenu(options)
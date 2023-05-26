/*
O que são Object Types?
-São os dados que tem como o tipo objeto, por exemplo: object
literals e arrays
-Temos diversos recursos para explorar sobre estes tipos
-Como: interfaces, readonly, tupla e outros
-Isso nos dá possibilidades a mais para o JS
*/

/*
De tipo para interface
-Um caso de uso para interfaces é simplificar os parâmetros 
de objeto de funções
-Ou seja, em vez de passar parâmetros de um objeto longo para 
n funções, passamos apenas a interface
*/

interface Product {
    name: string,
    price: number,
    isAvailable: true
}

function showProductDetails(name: string, price: number, isAvailable: true) {
    //n recomendado
}

function showProductDetails2(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log('O produto está disponível')
    }
}

const tshirt: Product = {
    name: 'camisa',
    price: 20,
    isAvailable: true
}
showProductDetails2(tshirt)

/*
Propriedades opcionais em intrefaces
-As interfaces podem conter propriedades de objeto opcionais
-Basta adicionar a interrogação no nome da propriedade
-Ex: nome?: string
*/

interface User2 {
    email: string,
    role?: string
}

function showUserDetails(user: User2) {
    console.log(`O usuário tem o e-mail: ${user.email}`)
    
    if(user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1: User2 = {email: 'aa@kjk.lfkl', role: 'rolezar'}
const u2: User2 = {email: 'aa@kjk.lfkl'}

console.log(u1)
console.log(u2)

/*
Propriedades readonly
-As propriedades readonly podem ser alteradas apenas uma vez,
na criação do novo dado
-É uma forma de criar um valor constante em um objeto
-Podemos adicioanar as interfaces
*/

interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: 'VW',
    wheels: 4
}
// da erro fusca.wheels = 5
console.log(fusca)

/*
Index Signature
-Utilizamos o Indez Signature quando não sabemos o nome das chaves,
mas já sabemos quais os tipos de um objeto ou array
-Isso restringe a tipo que não devem ser utilizados
-Uma barreira de segurança a mais na nossa variável
*/

interface CoordObject {
    [index: string]: number //aceita nome em string e recebe valor number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15
console.log(coords)
//da erro coords.z = "teste"

/*
Extending types
-Utilizamos Extending Types como uma herança para criar tipos mais 
complexos por meio de uma interface
-Ou seja, uma interface pode herdar as prorpiedades e tipos já 
definidos de outra
*/

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpower: string[]
}

const dieguito: Human = {
    name: 'Diego',
    age: 29
}

const diego: SuperHuman = {
    name: 'Diego',
    age: 29,
    superpower: ['gostoso', 'inteligente', 'lindo', 'meu namorado']
}
console.log(dieguito)
console.log(diego)

/*
Intersection Types
-São utilizados para criar tipos mais complexos a partir de duas
interfaces, por exemplo:
-Podemos concatenar os tipos com &
*/

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: string
}

type HumanWithGun = Character & Gun

const Arnold: HumanWithGun = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: '12'
}

console.log(Arnold)
console.log(Arnold.caliber)

/*
ReadOnlyArray
-O ReadOnlyArray é um tipo para arrays, que deixa os itens como 
readonly
-Podemos aplicar um tipo para os itens do array, além desta 
propriedade especial
-A modificação de itens pode ser feita através de método, mas não 
podemos aumentar o array, por exemplo
*/

let myArray: ReadonlyArray<string> = ['maçã', 'laranja', 'jabuticaba']

console.log(myArray)

myArray.forEach((item) => {
    console.log('Fruta: ' + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

/*
Tuplas
-Tupla é um tipo de array, porém definimos a quantidade e o tipo de
elementos
-Basicamente criamos um novo type, e nele inserimos um array com os
tipos necessários
-Cada tipo conta também como um elemento
*/

type fiveNumbers = [number, number, number, number] //pode misturar os tipos
const myNumberArray: fiveNumbers = [1, 2, 3, 4]
console.log(myNumberArray)

/*
Tuplas com readonly
-Podemos criar tuplas com as propriedade de readonly
-É um tipo de dado super restrito pois: 
.Limita quantos itens teremos, qual o tipo de cada um e também
não são modificáveis
*/

function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([17, 18])
/*
O que é narrowing?
-Narrowing é um recurso de TS para identificar tipos de dados
-Dando assim uma direção diferente a execução do programa, 
baseada no tipo que foi identificado
-Há situações em que os tipos podem ser imprevisívei, e 
queremos executar algo para cada uma das possibilidades
-Isso é fundamental também para evitar erros do compilador,
identificando e resolvendo os possíveis erros na hora do 
desenvolvimento
*/

/*
Typeof type guard 
-O type guard é basicamente uma validação do tipo 
utilizando o typeof
-Desta maneira podemos comparar o retorno do operador com 
um possivel tipo
-Todos os dados vem como string, exemplo: "string", "number",
"boolean"
-E a partir disso realizamos as bifurcações
*/

function sum(a: string | number, b: number | string) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossivel realizar a soma!")
    }
}

sum("4", "25")
sum(3, 68)
sum("7", 3)

/*
Checando se valor existe
-Em js podemos colocar uma variável em um if, e se houver algum 
valor recebemos um true
-Quando ñ há valor um false
-Desta maneira conseguimos realizar o narrowing também, é uma 
outra estratégia bem utilizada
*/

function operations(arr: number[], operation: string | undefined) {
    if(operation) {
        if(operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Por fabor, defina uma operação")
    }
}

operations([1, 2, 3], "sum")
operations([1, 2, 3], "multiply")

/*
Operador instanceof
-Para além dos tipos primitivos, podemos trabalhar com instanceof
-Checando se um dado pertence a uma determinada classe
-E ele vai servir até para as nossas próprias classes
*/

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User('jhon')
const paul = new SuperUser('paul')

function userGreeeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeeting(jhon)
userGreeeting(paul)

/*
Operador in
-O operador in é utilizado para checar se existe uma propriedade 
no objeto
-Outro recurso interessantepara o narrowing
-Pois propriedades também podem ser opcionais
*/

class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {
    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log('O cachorro é um SRD')
    }
}

showDogDetails(turca)
showDogDetails(bob)

//Desafio 3
type Review = number | boolean

function showReview(review: Review) {
    if(!review) {
        console.log('Você não avaliou o produto')
        return
    }

    console.log(`A nota que você deu foi ${review}`)
}

showReview(false)
showReview(5)
showReview(2)
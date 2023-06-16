/*
Exemplo real: Class Decorator
-Com Class Decorator podemos influenciar o constructor
-Neste exemplo vamos criar uma função para inserir data de 
criação dos objetos
*/

function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)
const pen = new Pen(55)

console.log(newBook)
console.log(newBook.createdAt)
console.log(pen)
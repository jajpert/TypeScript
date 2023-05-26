import { Human } from "./mytype"

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const diego = new User('diego lindo', 29)
console.log(diego)
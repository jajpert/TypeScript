/*
Exemplo real: Property Decorator
-Com o Property Decorator conseguimos verificar uma propriedade
de um objeto
-Vamos criar uma validação de número máximo de caracteres com 
decorators
*/

function Max(limit: number) {

    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get : getter,
            set: setter,
        })
    }
}

class Admin {
    @Max(10)
    username

    constructor(username: string) {
        this.username = username
    }
}

let yasmim = new Admin('yasmim ad')
console.log(yasmim)
let marina = new Admin('marina admin12345')

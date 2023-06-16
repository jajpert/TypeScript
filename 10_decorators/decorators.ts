/*
O que são os decorators?
-Decorators podem adicionar funcionalidades extras a classes e 
funções
-Basicamente criamos novas funções, que são adicionadas a partir
de um @nome
-Esta função será chamada assim que o item que foi definido o
decorator for executado
-Para habilitar precisamos adicionar uma configuração no
tsconfig.json
*/

/*
Primeiro decorator
-Vamos criar um decorator com uma function
-Ele pode trabalhar com argumentos especiais que são: target,
propertyKey e descriptor
-Estes são os grandes trunfos do decorator, pois nos dão informação
do local em que ele foi executado
*/

function myDecorator() {
    console.log('Iniciando decorator!')
    
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log('Executando decorator')
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass2 {
    @myDecorator()
    testing() {
        console.log('terminando execução do método')
    }
}

let myObj2 = new myClass2()
myObj2.testing()

/*
Múltiplos decorators
-Podemos utilizar múltiplos em ts
-O primeiro a ser executado é o que está mais ao topo do código
-Desta maneira é possível criar operações mais complexas
*/

function b() {
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log('executou b.')
    }
}

function c() {
    return function(
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
    ){
        console.log('executou c.')
    }
}

class MultipleDecorators {
    @b()
    @c() //o mais perto da função será executado primeiro
    testing() {
        console.log('Terminando execução')
    }
}

const multiple = new MultipleDecorators()
multiple.testing()

/*
Decorator de classe
-O decorator de classe está ligado ao constructor
-Ou seja, sempre que este for executado, teremos a execução 
do decorator
-Isso nos permite acrescentar algo a criação de classes
*/

function classDec(constructor: Function) {
    console.log(constructor)
    console.log(constructor.name)
    if(constructor.name === "User3") {
        console.log('Criando usuário!')
    }
}

@classDec
class User3 {
    name
    constructor(name: string) {
        this.name = name
    }

}

const gabi = new User3('Gabi')
console.log(gabi)

/*
Decorator de método
-Com este decorator podemos modificar a execução de métodos
-Precisamos inserir o decorator antes da declaração do método
-Ele é executado antes do método
*/

function enumerable(value: boolean) {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}

class Machinee {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(true)
    showName() {
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const tratore = new Machinee('Tratore')
console.log(tratore.showName())

/*
Accessor decorator
-Semelhante ao decorator de método
-Porém este serve apenas para os getters e setters
-Podemos alterar a execução antes de um set ou get
*/

class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster('Charmander', 12)
console.log(charmander)

/*
Property decorator
-O property decorator é utilizado nas propriedades de
uma classe
-Ou seja, na hora da definição da mesma podemos ativar 
uma função
-Isso nos ajuda a modificar ou validar algum valor
*/

// 1 - 00001
function formatNumber() {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class Id {
    @formatNumber()
    id 

    constructor(id: string) {
        this.id = id
    }
}

const newIten = new Id('1')
console.log(newIten)
console.log(newIten.id)
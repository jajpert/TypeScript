"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
Primeiro decorator
-Vamos criar um decorator com uma function
-Ele pode trabalhar com argumentos especiais que são: target,
propertyKey e descriptor
-Estes são os grandes trunfos do decorator, pois nos dão informação
do local em que ele foi executado
*/
function myDecorator() {
    console.log('Iniciando decorator!');
    return function (target, propertKey, descriptor) {
        console.log('Executando decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass2 {
    testing() {
        console.log('terminando execução do método');
    }
}
__decorate([
    myDecorator()
], myClass2.prototype, "testing", null);
let myObj2 = new myClass2();
myObj2.testing();
/*
Múltiplos decorators
-Podemos utilizar múltiplos em ts
-O primeiro a ser executado é o que está mais ao topo do código
-Desta maneira é possível criar operações mais complexas
*/
function b() {
    return function (target, propertKey, descriptor) {
        console.log('executou b.');
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log('executou c.');
    };
}
class MultipleDecorators {
    testing() {
        console.log('Terminando execução');
    }
}
__decorate([
    b(),
    c() //o mais perto da função será executado primeiro
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
/*
Decorator de classe
-O decorator de classe está ligado ao constructor
-Ou seja, sempre que este for executado, teremos a execução
do decorator
-Isso nos permite acrescentar algo a criação de classes
*/
function classDec(constructor) {
    console.log(constructor);
    console.log(constructor.name);
    if (constructor.name === "User3") {
        console.log('Criando usuário!');
    }
}
let User3 = class User3 {
    constructor(name) {
        this.name = name;
    }
};
User3 = __decorate([
    classDec
], User3);
const gabi = new User3('Gabi');
console.log(gabi);
/*
Decorator de método
-Com este decorator podemos modificar a execução de métodos
-Precisamos inserir o decorator antes da declaração do método
-Ele é executado antes do método
*/
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machinee {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Machinee.prototype, "showName", null);
const tratore = new Machinee('Tratore');
console.log(tratore.showName());
/*
Accessor decorator
-Semelhante ao decorator de método
-Porém este serve apenas para os getters e setters
-Podemos alterar a execução antes de um set ou get
*/
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster('Charmander', 12);
console.log(charmander);
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
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newIten = new Id('1');
console.log(newIten);
console.log(newIten.id);

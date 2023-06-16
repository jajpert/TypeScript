"use strict";
/*
Campos em classes
-Em ts podemos adicionar novos campos a uma classe, ou seja,
iniciar a classe com campos para os futuros dados dos objetos
-Que serão as propriedades dos objetos instanciados
-Estes campos podem ser tipados também
-Note que um campo sem valor inicial, deve ser declarado com !
*/
class User2_0 {
}
const jujubs = new User2_0();
jujubs.name = 'ju linda';
jujubs.age = 20;
console.log(jujubs);
/*
Constructor
-Constructor é uma função que nos dá a possibilidade de
iniciar um objeto com valores nos seus campos
-Isso faz com que não precisemos mais da !
-Provavelmente todos os campos serão preenchidos na hora
de instanciar um objeto
*/
class newUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new newUser('João', 16);
console.log(joao);
/*
Campos readonly
-Podemos iniciar o campo com valor e torná-lo readonly
-Ou seja, será um valor só para consulta
-Não poderemos alterar este valor ao longo do programa
*/
class Car2 {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const porshe = new Car2('Porshe');
console.log(porshe);
console.log(porshe.wheels);
porshe.name = 'porsche npx';
console.log(porshe);
/*
Herança e super
-Para gerar uma herança utilizamos a palavra reservada extends
-Depois vamos precisar passar as propriedades da classe pai para
ela, quando instanciamos um objeto
-Isso será feito com a função super
*/
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
/*
Métodos
-São como funções da classe
-Podemos criá-los junto das classes e os objetos podem utilizá-los
-É uma maneira de adicionar funcionalidades as classes
*/
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey stranger');
    }
}
const jimmy = new Dwarf('Jimmy');
console.log(jimmy.name);
jimmy.greeting();
/*
O this
-A palavra reservada this serve para nos referirmos ao objeto
em si
-Ou seja, conseguimos acessar as suas propriedades
-Esta funcionalidade funciona da mesma forma em js
*/
class Truck2 {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck2('Volvo', 500);
volvo.showDetails();
/*
Utilizando getters
-Os getters são uma forma de retornar propriedades do objeto
-Porém podemos modificá-las neste retorno, isso é muito interessante
-Ou seja, é um método para ler propriedades
*/
class Persona {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const Jajapert = new Persona('Julia', 'Ajpert');
console.log(Jajapert.fullName);
/*
Utilizando setters
-Os getters leem propriedades, os setters as modificam/atribuem
-Logo, podemos fazer validações antes de inserir uma propriedade
-Os setters também funcionam como métodos
*/
class algumaCoisa {
    set qqe(fruta) {
        if (fruta === 'jabuticaba') {
            return;
        }
        this.fruta = fruta;
        console.log('Fruta inserida com sucesso');
    }
    get qqe2() {
        return this.fruta;
    }
}
const jabuti = new algumaCoisa();
jabuti.qqe = 'jabutcaba';
console.log(jabuti.qqe2);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
/*
Override de métodos
-O override é uma técnica utilizada para substituir um método
de uma classe que herdamos algo
-Isso caracteriza o override
*/
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando again');
    }
}
const myObject = new Nova();
myObject.someMethod();
/*
Visibilidade
-Visibilidade é o conceito de expor nossos métodos de classe
.public: visibilidade default, pode ser acessado em qualquer lugar
.protected: acessível apenas a subclasses da classe do método, para
acessar uma propriedade precisamos de um método
.private: apenas a classe que declarou o método pode utilizar
*/
/*
Visibilidade: public
-O public é o modo de visibilidade default
-Ou seja, já está implícito e não precisamos declarar
-Basicamente qualquer método ou propriedade de classe pai, estará
acessível na classe filha
*/
class C {
    constructor() {
        this.x = 20;
    }
}
const cInstance = new C();
console.log(cInstance.x);
/*
Visibilidade: protected
-Os itens protected podem ser utilizados apenas em subclasses
-Uma propriedade só pode ser acessada por um método, por exemplo
-O mesmo acontece com métodos
-Adicionando uma camada de segurança ao código criado em uma classe
*/
class E {
    constructor() {
        this.x = 20;
    }
    ProtectedMethod() {
        console.log('Este método é protegido');
    }
}
class F extends E {
    showX() {
        console.log('X: ' + this.x);
    }
    showProtectedMethod() {
        this.ProtectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
/*
Visibilidade: private
-Os itens privaate, propriedades e objetos, só podem ser acessados
na classe que os definiu
-E ainda precisam de métodos para serem acesaddos
-Esta é a maior proteção para propriedades e métodos
*/
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObjt = new PrivateClass();
console.log(pObjt.showName());
pObjt.showPrivateMethod();
/*
Static members
-Podemos criar propriedades e métodos estáticos em classes
-Isso faz com que o acesso ou a utilização não dependam de objetos
-Podemos utilizá-los a partir da própria classe
*/
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
/*
Generic class
-Podemos criar classes com tipos genéricos também
-Ou seja, as propriedades dos argumentos podem ter os tipos
definidos na hora da criação instância
-Isso nos permite maior flexibilidade em uma classe
*/
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first} e o second é ${this.second}`;
    }
}
const newItem = new Item('caixa', 20);
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
console.log(typeof newItem.second);
/*
Parameters properties
-Parameters properties é um recurso para definir a privacidade, nome e
tipo das propriedades no constructor
-Isso resume um pouco a sintaxe das nossas classes
*/
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qty total: ${this.qty}`;
    }
    get showPrice() {
        return `Price total: ${this.price}`;
    }
}
const newTShirt = new ParametersProperties('Camisa', 5, 20);
console.log(newTShirt);
console.log(newTShirt.showQty);
console.log(newTShirt.showPrice);
/*
Class Expressions
-É um recurso para criar uma classe anônima
-Podemos também utilizar generics junto deste recurso
-Vamos encapsular a classe em uma variável
*/
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Jones');
console.log(pessoa);
console.log(pessoa.name);
/*
Abstract class
-É um recurso para servir como molde de outra classe
-Todos os métodos dela devem ser implementados nas classes
que a herdam
-E também não podemos instanciar objetos a partir destas classes
*/
class AbstractClass {
}
// da erro const newOBject = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
const newAbstractObject = new AbstractExample('Sono');
newAbstractObject.showName();
/*
Relações entre classes
-Podemos criar um objeto com base em outra
-Quando as classes são idênticas o TS não reclama sobre esta ação
-Precisamos que as duas sejam exatamente iguais

=> não é muito utilizado

*/
class Cat {
}
class Fish {
}
const gatinho = new Fish();
console.log(gatinho);

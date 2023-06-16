/*
Campos em classes
-Em ts podemos adicionar novos campos a uma classe, ou seja,
iniciar a classe com campos para os futuros dados dos objetos
-Que serão as propriedades dos objetos instanciados
-Estes campos podem ser tipados também
-Note que um campo sem valor inicial, deve ser declarado com !
*/

class User2_0{
    name!: string
    age!: number
}
const jujubs = new User2_0()
jujubs.name = 'ju linda'
jujubs.age = 20

console.log(jujubs)

/*
Constructor
-Constructor é uma função que nos dá a possibilidade de 
iniciar um objeto com valores nos seus campos
-Isso faz com que não precisemos mais da !
-Provavelmente todos os campos serão preenchidos na hora 
de instanciar um objeto
*/

class newUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new newUser('João', 16)
console.log(joao)

/*
Campos readonly
-Podemos iniciar o campo com valor e torná-lo readonly
-Ou seja, será um valor só para consulta
-Não poderemos alterar este valor ao longo do programa
*/

class Car2 {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const porshe = new Car2('Porshe')

console.log(porshe)
console.log(porshe.wheels)
porshe.name = 'porsche npx'
console.log(porshe)

/*
Herança e super
-Para gerar uma herança utilizamos a palavra reservada extends
-Depois vamos precisar passar as propriedades da classe pai para
ela, quando instanciamos um objeto
-Isso será feito com a função super
*/

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(trator)
console.log(destroyer)

/*
Métodos
-São como funções da classe
-Podemos criá-los junto das classes e os objetos podem utilizá-los
-É uma maneira de adicionar funcionalidades as classes
*/


class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log('Hey stranger')
    }
}

const jimmy = new Dwarf('Jimmy')
console.log(jimmy.name)
jimmy.greeting()

/*
O this
-A palavra reservada this serve para nos referirmos ao objeto
em si
-Ou seja, conseguimos acessar as suas propriedades
-Esta funcionalidade funciona da mesma forma em js
*/

class Truck2 {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck2('Volvo', 500)
volvo.showDetails()

/*
Utilizando getters
-Os getters são uma forma de retornar propriedades do objeto
-Porém podemos modificá-las neste retorno, isso é muito interessante
-Ou seja, é um método para ler propriedades
*/

class Persona {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const Jajapert = new Persona('Julia', 'Ajpert')
console.log(Jajapert.fullName)

/*
Utilizando setters
-Os getters leem propriedades, os setters as modificam/atribuem
-Logo, podemos fazer validações antes de inserir uma propriedade
-Os setters também funcionam como métodos
*/

class algumaCoisa {
    fruta!: string

    set qqe(fruta: string) {
        if(fruta === 'jabuticaba') {
            return
        }

        this.fruta = fruta
        console.log('Fruta inserida com sucesso')
    }

    get qqe2(){
        return this.fruta
    }
}

const jabuti = new algumaCoisa()
jabuti.qqe = 'jabutcaba'
console.log(jabuti.qqe2)

/*
Herdando interfaces
-Podemos herdar de interfaces também com a intrução implements
-A ideia é bem parecida de extends
-Porém esta forma é mais utilizada para criar os métodos que 
várias classes terão em comum
*/

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle(): string {
        return `O título do post é ${this.title}`
    }
}

const myPost = new blogPost('Hello World')
console.log(myPost.itemTitle())

/*
Override de métodos
-O override é uma técnica utilizada para substituir um método
de uma classe que herdamos algo
-Isso caracteriza o override
*/

class Base {
    someMethod() {
        console.log('alguma coisa')
    }
}


class Nova extends Base{
    
    someMethod() {
        console.log('testando again')
    }
}

const myObject = new Nova()
myObject.someMethod()

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
    public x = 20
}

const cInstance = new C()
console.log(cInstance.x)

/*
Visibilidade: protected
-Os itens protected podem ser utilizados apenas em subclasses
-Uma propriedade só pode ser acessada por um método, por exemplo
-O mesmo acontece com métodos
-Adicionando uma camada de segurança ao código criado em uma classe
*/

class E {
    protected x = 20

    protected ProtectedMethod() {
        console.log('Este método é protegido')
    }
}

class F extends E {
    showX() {
        console.log('X: '+ this.x)
    }

    showProtectedMethod(){
        this.ProtectedMethod()
    }
}

const fInstance = new F()
fInstance.showX()
fInstance.showProtectedMethod()

/*
Visibilidade: private
-Os itens privaate, propriedades e objetos, só podem ser acessados
na classe que os definiu
-E ainda precisam de métodos para serem acesaddos
-Esta é a maior proteção para propriedades e métodos
*/

class PrivateClass {
    private name = 'Private'

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log('Método privado')
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObjt = new PrivateClass()
console.log(pObjt.showName())
pObjt.showPrivateMethod()

/*
Static members
-Podemos criar propriedades e métodos estáticos em classes
-Isso faz com que o acesso ou a utilização não dependam de objetos
-Podemos utilizá-los a partir da própria classe
*/

class StaticMembers {
    static prop = 'Teste static'

    static staticMethod() {
        console.log('Este é um método estático')
    }
}
console.log(StaticMembers.prop)
StaticMembers.staticMethod()

/*
Generic class
-Podemos criar classes com tipos genéricos também
-Ou seja, as propriedades dos argumentos podem ter os tipos 
definidos na hora da criação instância
-Isso nos permite maior flexibilidade em uma classe
*/

class Item<T, U> {
    first
    second

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é: ${this.first} e o second é ${this.second}`
    }
}

const newItem = new Item('caixa', 20)
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.first)
console.log(typeof newItem.second)

/*
Parameters properties
-Parameters properties é um recurso para definir a privacidade, nome e
tipo das propriedades no constructor
-Isso resume um pouco a sintaxe das nossas classes
*/

class ParametersProperties {
    constructor (public name: string, private qty: number, private price: number) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qty total: ${this.qty}`
    }

    get showPrice() {
        return `Price total: ${this.price}`
    }
}

const newTShirt = new ParametersProperties('Camisa', 5, 20)
console.log(newTShirt)
console.log(newTShirt.showQty)
console.log(newTShirt.showPrice)

/*
Class Expressions
-É um recurso para criar uma classe anônima
-Podemos também utilizar generics junto deste recurso
-Vamos encapsular a classe em uma variável
*/

const myClass = class<T>{
    name

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass('Jones')
console.log(pessoa)
console.log(pessoa.name)

/*
Abstract class
-É um recurso para servir como molde de outra classe
-Todos os métodos dela devem ser implementados nas classes
que a herdam
-E também não podemos instanciar objetos a partir destas classes
*/

abstract class AbstractClass {
    abstract showName(): void
}

// da erro const newOBject = new AbstractClass()

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

    showName(): void {
        console.log(this.name)
    }
}

const newAbstractObject = new AbstractExample('Sono')
newAbstractObject.showName()

/*
Relações entre classes
-Podemos criar um objeto com base em outra 
-Quando as classes são idênticas o TS não reclama sobre esta ação
-Precisamos que as duas sejam exatamente iguais

=> não é muito utilizado

*/

class Cat {
    name!: string
}

class Fish {
    name!: string
}

const gatinho: Cat = new Fish()
console.log(gatinho)


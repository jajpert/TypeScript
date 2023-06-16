/* 
Arrays
-Podemos especificar um array como tipo também
-Se temos um array de numeros: numer[]
-Se temos um array de string: string[]
-Isso acontece pois geralmente os arrays possuem um único 
tipo de dado entre seus itens
*/

let num1: number[] = [1, 2, 3]
num1.push(8.5)
console.log(num1[3])

const nome: string[] = ['Diego', 'Franco']
console.log(nome)

/*
Outra sintaxe de arrays
obs: a de cima é a mais utilizada
-Podemos também fazer desta maneira: Array<number>
*/

const num2: Array<number> = [100, 200]
num2.push(300)

console.log(num2)

/*
O tipo any
-o any transmite ao TS que qualquer tipo satisfaz a variável
-Devemos tentar ao máximo evitar este tipo, pois vai contra os princípior
do JS
-Dois cados de uso: o tipo de dado realmente não importa e arrays
com dados de múltiplos tipos
*/

const arr1: any = [1, true, 'nada', [], {nome: 'Diego'}]
console.log(arr1)

/* 
Tipo de parâmetro de funções
-Podemos definir o tipo de cada parâmetro de uma função
-Assim condicionamos o seu uso correto
-A sintaxe é: function minhaFuncao(nome: string) {}
    |_agora podemos passar o parâmetro nome, apenas como texto
*/

function soma(a: number, b: number) {
    console.log(a + b)
}
soma(6, 8)

/*
Tipo de retorno de funções
-Os retornos também podem ser definidos por nós
-Para isso utilizamos a sintaxe: function myFunction(): number{}
    |_esta função retorna um número
*/

function greeting(name: string) {
    return `Ola ${name}`
}

console.log(greeting('Diego lindo'))

/*
Funções anônimas em ts
-O ts consegue nos ajudar também em funções anônimas
-Fazendo uma validação do código digitado, nos fornecendo dicas
de possíveis problemas
-Ex: método ñ existente
*/

setTimeout(function() {
    const sallary: number = 1000
    console.log(sallary)
}, 5000)

/*
Tipos de objetos
-Podemos determinar tipos para objetos também
-A sintaxe é: {prop: tipo, prop2: tipo2}
-Ou seja, estamos determinando quais tipos as propriedades de um objeto possuem
*/

function passCoordinates(coord: {x: number, y: number}) {
    console.log('X coordinates: ' + coord.x)
    console.log('Y coordinates: ' + coord.y)
}

const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

/*
Propriedades opcionais
-Nem sempre os objetos possuem todas as propriedades que poderiam possuir
-Por isso temos as propriedades opcionais
-Para ter esse resultado devemos colocar uma interrogação:
{nome: string, sobrenome?: string}
*/

function showNumber(a: number, b: number, c?: number) {
    console.log('a: ' + a)
    console.log('b: ' + b)
    console.log('c: ' + c)
}

showNumber(1,2,3)
showNumber(1,2)

/*
Validação de props opcionais
-Quando a propriedade é opcional, precisamos criar uma validação
-Isso acontece por que o TS não nos ajuda mais, já que ele deixa
de controlar o valor que recebmos
-Para isto utilizamos uma condicinal if, e conseguimos resolver a situação
*/

function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined) {
        return(`Olá ${firstName} ${lastName}, tudo bem?`)
    }

    return `Olá ${firstName}, tudo bem?`
}

console.log(advancedGreeting('Diego', 'Lindo'))
console.log(advancedGreeting('Diego'))

/*
Unio type
-O union type é uma alternativa melhor do que o any
-Onde podemos determinar dois tipos para um dado
-A sintaxe: number|string
*/

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}
showBalance(1100)

const arr2: Array<number | string | boolean> = [1, 'teste', true]

/*
Avançando em union type
-Podemos utilizar condicionais para validação do tipo de union types
-Com isso é possível trilhar rumos diferentes, baseado no tipo de dado
-Para checar o tipo utilizamos typeof
*/

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return 'Usuário não aprovado'
    }

    return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole(true))
console.log(showUserRole('admin'))

/*
Type alias
-Type alias é um recurso que eprmite criar um tipo e determinar
o que ele verifica
-Desta maneira temos uma menira mais fácil de chamá-lo em vez de 
criar expressões complexas com Union types, por exemplo
*/

type ID = string | number //alias

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

/*
Introdução as interfaces
-Uma outra maneira de nomear um tipo de objeto
-Podemos determinar um nome para o tipo
-E também escolher quais as propriedades e seus tipos
*/

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coorObj: Point = {
    x: 10,
    y: 9,
    z: 20
}

showCoords(coorObj)

/*
Diferença entre type alias e interfaces
-Na maioria das vezes podemos optar entre qualquer um dos
recursos sem problemas
-A unica diferença é que a Interface pode ser alterada
ao longo do código, já o alias não
-Ou seja, se pretendemos mudar como o tipo se conforma,
devemos escolher a Interface
*/

interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: 'Juju', age: 18}
console.log(somePerson)

//se tentar modifica-lo ao longo do código ele gerará um erro
type personType = {
    name: string
}

/*
Literal types
-É um recurso que permite colocar valores como tipos
-Isso restringe o uso a não só tipos, como também os
próprios valores
-Este recurso é muito utilizado com Union types
*/

let test: "testando"
test = 'testando'

console.log(test)

function showDirection(direction: 'left' | 'right' | 'center') {
    console.log(`A direção é: ${direction}`)
}
showDirection('left')
//showDirection('top')  dá erro

/*
Non-null Assertion Operator
-As vezes o ts pode evidenciar um erro, baseado em um 
valor que no momento do código ainda não está disponível
-Porém se sabemos que este valor será preenchido, podemos 
evitar o erro
-Utilizamos o caractere !
*/

const p = document.getElementById("some-p")
console.log(p!.innerText)

/*
Bigint
-Com o tipo bigint podemos declarar numeros com valores
muito altos
-Podemos utilizar a notação literal, exemplo: 100n
-Para este recurso precisamos mudar a configuração do TS,
para versão mínima de ES2020
*/

let n: bigint
// da erro n = 1

n = 1000n
console.log(n)
console.log(n + 100n)

/*
Symbol
-De forma resumida, o Symbol cria uma referência única 
para um valor
-Ou seja, mesmo que ele possua o mesmo valor de outra variável,
teremos valores sendo considerados diferentes
*/
let symbolA: symbol = Symbol('a')
let symbolB = Symbol('a')

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)


















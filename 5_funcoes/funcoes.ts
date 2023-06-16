/*
Funções que não retornam nada
-Podemos ter funções que não retornam valores
-Qual seria o tipo de dado indicado para essa situação?
-Neste caso utilizamos o void!
-Ele vai dizer ao TS que não temos um valor de retorno
*/

function withoutReturn(): void {
    console.log('Está função não tem retorno!')
}

withoutReturn()

/*
Callback como argumento
-Podemos inserir uma função de callback como argumento de função
-Nela conseguimos definir o tipo de argumento aceito pela callback
-E também o tipo de retorno da mesma
*/

function greeting1(name: string) {
    return `Ola ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) { //recebe uma função e um argumento
    console.log("Preparando a função!")

    const greet = f(userName)

    console.log(greet)
}

preGreeting(greeting1, "Diego")

/*
Generic functions
-É uma estratégia para quando o tipo de retorno é relacionado ao tipo 
do argumento
-Por exemplo: um item de um array, pode ser string, boolean ou number
-Normalmente são utilizadas letras como T ou U para definir os generics 
é uma convenção
*/

function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([24, 8, 96, 12]))

function mergeObject<U, T> (obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}
const newObject = mergeObject({name: 'Diego'}, {age: 29, job: 'programmer'})
console.log(newObject)

/*
Constrains nas Generic Functions
-As Generic Functions podem ter seu escopo reduzido por constraints
-Basicamente limitamos os tipos que podem ser utilizados no Generic
-Isso faz com que o nosso escopo seja menos abrangente
*/

function biggestNumber<T extends number | string>(a: T, b: T): T{
    let biggest: T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}
console.log(biggestNumber(5, 8))
console.log(biggestNumber('2', '7'))

/*
Definindo tipo de parâmetro
-Em generic functions temos que utilizar parâmetros de tipos 
semelhantes, se não recebemos um erro
-Porém há a possibilidade de determinar o tipo também dos parâmetros
aceitos, com uma sintaxe especial
-Isso faz com que a validação do TS aceite os tipos escolhidos
*/

function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [7,8]))
console.log(mergeArrays<number | string>([1,2,3], ['teste', 'testando']))

/*
Parâmetros opcionais
-Nem sempre utilizamos todos os parâmetros de uma função
-Mas se ele for opcional, precisamos declarar isso para o TS
-E ainda deixar ele no fim da lista de parâmetros
*/

function modernGreeting(nome: string, greet?: string) {
    if(greet) {
        return `Olá ${greet} ${nome}, tudo bem?`
    }

    return `Olá ${nome}, tudo bem?`
}

console.log(modernGreeting('Juju')) // se n fizer condicional e a greet
// n for mencionada imprime undefined
console.log(modernGreeting('Diego', 'vc é lindo'))

/*
Parâmetros default
-Os parâmetros default são os que já possuem um valor definido
-Se não passarmos para a função, é utilizado esse valor
-Para este recurso, a aplicação em TS é igual JS
*/

function somaDefault(n: number, m: number = 10) {
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(12 + 7))

/*
O tipo unknown
-o tipo uknown é utilizado de forma semelhante ao any, ele 
aceita qualquer tipo de dado
-Porém a diferença é que ele não deixa algo ser executado se não 
houver validação de tipo
-ou seja, adiciona uma trava de segurança
*/

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("X é um número")
    }
}

doSomething([1, 2, 3])
doSomething(5)

/*
O tipo never
-O never é um tipo de retorno semelhante ao void
-Porém é utilizado quando a função não retorna nada
-Um exemplo: retorno de erros
*/

function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

//showErrorMessage("Algum erro")

/*
Rest parameters
-Em JS ES6 podemos utilizar o Rest Operator
-Para aplicá-lo em parâmetros em TS é fácil, basta definir o 
tipo de dado com a sintaxe de Rest(...)
*/

function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}
console.log(sumAll(1, 2, 3, 4, 5))
//console.log(sumAll("erro"))

/*
Destructuring em parâmetros
-O Destructuring, outro recurso de ES6, também pode ser aplicado 
com TS
-Precisamos apenas determinar o tipo de cada dado que será desestruturado
-Desta maneira o TS valida o Destructuring
*/

function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 28.99}
console.log(showProductDetails(shirt))
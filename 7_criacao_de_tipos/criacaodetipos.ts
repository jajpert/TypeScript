/*
Sobre criação de novos tipos
-Há a possibilidade de gerar novos tipos em ts, já vimos
isso com Generics (vamo nos aprofundar neste recurso também)
-Porém existem outros operadores que visam facilitar nossa vida
neste assunto
-A ideia deste recurso é deixar a manutenção do projeto mais simples
-Ou seja, gastar mais tempo na estruturação dos tipos e menos na busca
de possíveis bugs depois
*/

/*
Generics
-Utilizamos Generics quando uma função pode aceitar mais de um tipo
-É uma prática mais interessante do que o any, que teria um efeito
semelhante, porém com Generics
*/

function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('testando generic'))

/*
Constraint em Generics
-As constraints nos ajudam a limitar os tipos aceitos
-Como em Generic podemos ter tipos livres, elas vão filtrar 
os tipos aceitos
-Adicionando organização quando queremos aproveitar a liberdade
dos Generics
*/

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: 'chave', cor: 'blue'}
console.log(showProductName(myObj))

/*
Interfaces com Generics
-Com Interfaces podemos criar tipos complexos para objetos
-Adicionando Generics podemos deixá-los mais brandos
-Aceitando tipos diferentes em ocasiões diferentes
*/

interface MyObject<T, U> {
    name: string
    wheels: T 
    engine: U
}

type car = MyObject<number, number>
type pen = MyObject<boolean, boolean>

const myCar: car = {name: 'Fusca', wheels: 4, engine: 1.0 }
const myPen: pen = {name: 'Bic', wheels: false, engine: false}

console.log(myCar)
console.log(myPen)

/*
Type paramenters
-Type parameters é um recurso de Generics
-Utilizado para dizer que algum parâmetro de uma função,
por exemplo é a chave de um objeto, que também é parâmetro
-Desta maneira conseguimos criar uma ligação entre o tipo 
genérico e sua chave
*/

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2T',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))

/*
keyof Type Operator
-Com o keyof Type Operator podemos criar um novo tipo
-Ele aceita dados do tipo objeto, como object literals e arrays
-E pode criar o tipo baseado nas chaves do objeto passado como parâmetro
*/

type character = {name: string, age: number, hasDriveLicense: boolean}
type c = keyof character

function showCharName(obj: character, key: c):string {
    return `${obj[key]}`
}

const myChar: character = {
    name: 'Ju',
    age: 18,
    hasDriveLicense: false
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
console.log(showCharName(myChar, 'hasDriveLicense'))

/*
typeof Type Operator
-Com o typeof Type Operator podemos criar um novo tipo
-Este tipo será baseado no tipo de algum dado
-Ou seja, é interessante para quando queremos criar uma 
variável com o mesmo tipo de outra, por exemplo
*/

const userName: string = 'Julia'
const userName2: typeof userName = 'Diego'

/*
Indexed Access types
-A abordagem Indexed Access types pode criar um tipo baseado em uma
chave de objeto
-Ou seja, conseguimos reaproveitar o tipo da chave para outros locais,
como funções
*/

type Truck = {km: number, kg: number, description: string}
type Km = Truck['km']

const newTruck : Truck = {
    km: 200,
    kg: 500000,
    description: 'caminhão de mudança'
}

function showKm(km: Km) {
    console.log(`O veiculo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 100,
    kg: 1000,
}

showKm(newCar.km)

/*
Conditional Expressions Type
-O tipo por condição permite criar um novo tipo com base
em um if/else
-Mas não são aceitas expressões tão amplas
-Utilizamos a sintaxe de if ternário
*/

interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string
const someVar: myType = 2

type myTypeB = Teste extends {showNumber(): number} ? string : boolean

/*
Template Literals Type
-Podemos criar tipos com Template literals
-É uma forma de customizar tipos de maneiras infinitas
-Pois o texto que formamos pode depender de variáveis
*/

type testA = 'text'
type CustomType = `some ${testA}`
const testing: CustomType = 'some text'

type a1 = 'testando'
type a2 = 'union'

type a3 = `${a1} | ${a2}`


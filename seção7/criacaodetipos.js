"use strict";
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
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generic'));
/*
Constraint em Generics
-As constraints nos ajudam a limitar os tipos aceitos
-Como em Generic podemos ter tipos livres, elas vão filtrar
os tipos aceitos
-Adicionando organização quando queremos aproveitar a liberdade
dos Generics
*/
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'chave', cor: 'blue' };
console.log(showProductName(myObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0 };
const myPen = { name: 'Bic', wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
/*
Type paramenters
-Type parameters é um recurso de Generics
-Utilizado para dizer que algum parâmetro de uma função,
por exemplo é a chave de um objeto, que também é parâmetro
-Desta maneira conseguimos criar uma ligação entre o tipo
genérico e sua chave
*/
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2T',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: 'Ju',
    age: 18,
    hasDriveLicense: false
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
console.log(showCharName(myChar, 'hasDriveLicense'));
/*
typeof Type Operator
-Com o typeof Type Operator podemos criar um novo tipo
-Este tipo será baseado no tipo de algum dado
-Ou seja, é interessante para quando queremos criar uma
variável com o mesmo tipo de outra, por exemplo
*/
const userName = 'Julia';
const userName2 = 'Diego';
const newTruck = {
    km: 200,
    kg: 500000,
    description: 'caminhão de mudança'
};
function showKm(km) {
    console.log(`O veiculo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 100,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 2;
const testing = 'some text';

"use strict";
/*
O que são Object Types?
-São os dados que tem como o tipo objeto, por exemplo: object
literals e arrays
-Temos diversos recursos para explorar sobre estes tipos
-Como: interfaces, readonly, tupla e outros
-Isso nos dá possibilidades a mais para o JS
*/
function showProductDetails(name, price, isAvailable) {
    //n recomendado
}
function showProductDetails2(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
}
const tshirt = {
    name: 'camisa',
    price: 20,
    isAvailable: true
};
showProductDetails2(tshirt);
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'aa@kjk.lfkl', role: 'rolezar' };
const u2 = { email: 'aa@kjk.lfkl' };
console.log(u1);
console.log(u2);
const fusca = {
    brand: 'VW',
    wheels: 4
};
// da erro fusca.wheels = 5
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const dieguito = {
    name: 'Diego',
    age: 29
};
const diego = {
    name: 'Diego',
    age: 29,
    superpower: ['gostoso', 'inteligente', 'lindo', 'meu namorado']
};
console.log(dieguito);
console.log(diego);
const Arnold = {
    name: 'Arnold',
    type: 'shotgun',
    caliber: '12'
};
console.log(Arnold);
console.log(Arnold.caliber);
/*
ReadOnlyArray
-O ReadOnlyArray é um tipo para arrays, que deixa os itens como
readonly
-Podemos aplicar um tipo para os itens do array, além desta
propriedade especial
-A modificação de itens pode ser feita através de método, mas não
podemos aumentar o array, por exemplo
*/
let myArray = ['maçã', 'laranja', 'jabuticaba'];
console.log(myArray);
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4];
console.log(myNumberArray);
/*
Tuplas com readonly
-Podemos criar tuplas com as propriedade de readonly
-É um tipo de dado super restrito pois:
.Limita quantos itens teremos, qual o tipo de cada um e também
não são modificáveis
*/
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([17, 18]);

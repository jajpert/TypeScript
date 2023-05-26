//tipos primitivos: number, string e boolean

//1 - number
let x: number = 10;

console.log(x);

//n é possivel mudar uma variavel tipada com outro tipo


//2 - string
const nome: string = 'Julia';
const sobrenome: string = 'Ajpert';

let fullname: string;

fullname = nome + " " + sobrenome;

console.log(fullname);

//3 - boolean
let a: boolean = false;
console.log(a);
//n pode usar 1 ou 0 para determinar se é false ou true

/*
Type annotation e Tyoe inference

.Annotation é quando definimos o tipo de um dado manualmente
.Inference é quando o TS identifica e define o tipo de dados para nós

*/

//n é possivel mudar o tipo da variavel se ela for const
const ann: string = 'teste';
let inf = 'teste';

//desafio 2
let num: number = 1;
let numString = num.toString()

let printdonumber: string = `Imprimeeeeee ${num} é igual a ${numString}`

console.log(printdonumber)
console.log(typeof(numString))
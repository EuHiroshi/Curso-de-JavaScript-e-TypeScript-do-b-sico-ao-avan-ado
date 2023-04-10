/*
let umaString = "Barra invertida \\ para mostrar a barra, ou, \"oi\" para mostrar aspas"

console.log(umaString)
*/
//               01234567
let umaString = "Um texto";

// mesmas funções
console.log(umaString[3])
console.log(umaString.charAt(3)) // pegam a posição

console.log(umaString.concat(" ", "em um ", "lindo dia"))
console.log(`${umaString} em um lindo dia`) // adição

console.log(umaString.indexOf('Um')) // acha algo dentro da string
console.log(umaString.indexOf('o', 3)) // mesma coisa, mas declara o começo da busca
console.log(umaString.lastIndexOf('m', 3)) // começa de trás pra frente

console.log(umaString.match(/[a-z]/g)) // encontra um array
console.log(umaString.search(/[x]/)) // parecido com o indexOf

//                0123456789...                    33
let umaString2 = 'O rato roeu a roupa do rei de roma.';
console.log(umaString2.replace(/r/g, '#'))
console.log(umaString2.length) // n esquecer que conta o 0, por isso 34

console.log(umaString2.slice(2, 6))
console.log(umaString2.length - 3)
console.log(umaString2.slice(30, 34))
console.log(umaString2.slice(-5, -1)) // encontra uma palavra, ou string, em determinada posição, ou posições

console.log(umaString2.split(' ', 2)) // divide uma string dando o numero maximo dado, colocando a string(caractere no caso) q irá dividir

console.log(umaString2.toLocaleLowerCase()) // deixa em minusculo
console.log(umaString2.toLocaleUpperCase()) // deixa em maiusculo

// escreva uma função que recebe 2 numeros e retorne o maior deles

function maior(x, y) {
    let num1 = Math.floor(x)
    let num2 = Math.floor(y)
    if (num1 > num2) {
        console.log(`O número ${num1} é maior que ${num2}`);
        return;
    } if (num1 < num2) {
        console.log(`O número ${num2} é maior que ${num1}`);
        return;
    } else {
        console.log(`Os dois números(${num2}) são iguais`);
        return;
    }
}
maior(10.90900,7)


const max2 = (x, y) => x > y ? x : y;
console.log(max2(20,100))



// escreva uma funçao chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem
// retorne true se a imagem estiver no modo paisagem


function maior(x, y) {
    let num1 = Math.floor(x)
    let num2 = Math.floor(y)
    if (num1 > num2) {
        console.log(`true`);
        return;
    } if (num1 < num2) {
        console.log(`false`);
        return;
    } else {
        console.log(`Imagem quadrada`);
        return;
    }
}
maior(20,7)

const max3 = (largura, altura) => x > y ? true : false;

function ePaisagem(largura, altura) {
    return largura > altura;
}
console.log(ePaisagem(1920, 1080))
 



// escreva uma funçao que recebe um numero e retorne o seguinte: 
// numero e divisivel por 3 = fizz
// numero e divisivel por 5 = buzz
// numero e divisivel por 3 e 5 = fizzBuzz
// numero nao e divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero é realmente um numero
// use a funçao com numeros de 0 a 100


function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0){ // if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
        return 'FizzBuzz'
    }if (numero % 3 === 0){ // if (numero % 3 === 0) return 'Fizz'
        return 'Fizz';
    } if (numero % 5 === 0){ // if (numero % 5 === 0) return 'Buzz'
        return 'Buzz';
    } else {
        return numero;
    }
}

for (let index = 0; index <= 100; index++) {
    console.log(fizzBuzz(index))
    
}
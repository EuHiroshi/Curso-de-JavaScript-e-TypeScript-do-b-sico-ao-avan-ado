function* geradora1(){
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora1()
// console.log(g1.next().value) // primeiro yield
// console.log(g1.next().value) // segundo yield
// console.log(g1.next().value) // terceiro yield
// console.log(g1.next())
// for (const valor of g1) {
//     console.log(valor)
// }

// function* geradora2() {
//     let i = 1;
//     while(true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (const valor of g4) {
    console.log(valor)
}

// diferente do return, yield retorna algo mas ainda deixa o codigo abaixo ser executado posteriormente
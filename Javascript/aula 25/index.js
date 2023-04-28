// Filter, map, reduce

// retorne os numeros maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// const maiorQueDez = numeros.filter((num) => num >= 10)

// console.log(maiorQueDez)

// retorne os nomes com mais de 5 letras
// mais de 50 anos
// termina o nome com a
const pessoas = [
    {
        nome: 'Luiz',
        idade: 62
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Eduardo',
        idade: 55
    },
    {
        nome: 'Leticia',
        idade: 19
    },
    {
        nome: 'Rosana',
        idade: 32
    },
    {
        nome: 'Wallace',
        idade: 47
    }
]

const maiorQueCinco = pessoas.filter((e) => e.nome.length >= 5)
const maisQueCinquenta = pessoas.filter((e) => e.idade > 50)
// const terminaComA = pessoas.filter((e) => {
//     const posicao = e.nome.length - 1
//     if (e.nome[posicao] == 'a') {
//         return e.nome
//     }
// })
const terminaComA = pessoas.filter((e) => e.nome.endsWith('a') )

console.log(maiorQueCinco)
console.log('--------')
console.log(maisQueCinquenta)
console.log('--------')
console.log(terminaComA)

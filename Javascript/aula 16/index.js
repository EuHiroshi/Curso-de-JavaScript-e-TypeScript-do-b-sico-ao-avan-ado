const nomes = ['Eduardo', 'João', 'Carol']

// const nomesInverso = []
// const nomeTemporario = 'Eduardo' 
// nomesInverso[0] = 'Carol' // 'Carol', 'João', 'Carol'
// nomesInverso[2] = 'João' // 'Carol', 'João', 'João'
// nomesInverso[1] = nomeTemporario // 'Carol', 'Eduardo', 'João'

const nomesInverso = ['Carol', 'Eduardo', 'João'] // sobrepoe sem perder os dados, e sem ter q utilizar variavel temporaria

console.log(nomesInverso)


const numeros = [
    [1, 2, 3], // lista 1
    [4, 5, 6], // lista 2
    [7, 8, 9]  // lista 3
];

console.log(numeros[2][1]) // numeros no array de numero 2([7, 8, 9]) e dentro desse array, o elemento na posição 1(8)
const [lista1, lista2, lista3] = numeros;
console.log(lista1[2]) // 3

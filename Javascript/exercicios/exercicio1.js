/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu imc é de 25.925925925925924
nasceu em 1980
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const alturaEmM = 1.80
let anoAtual = 2019
let imc // peso / (altura * altura)
let anoNascimento

imc = (peso / (alturaEmM * alturaEmM))
anoNascimento = (anoAtual - idade)
// + = uni os valores
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg')
console.log(`tem ${alturaEmM} de altura e seu imc é de ${imc}`)
console.log('nasceu em', anoNascimento + '.')
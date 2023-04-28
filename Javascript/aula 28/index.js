/*
Object.values
Object.entries
Object.assign(dex, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 }
// mais intuitivo do que o assign
const spread = {
    ...produto,
    material: 'Algodão'
}
spread.nome = 'Camisa'
spread.preco = 149.99

const assign = Object.assign({}, produto, {material: 'Porcelana'})

const caneca = {nome: produto.nome, preco: produto.preco}

// nao deixa manipular o objeto, congela
// Object.freeze(produto)
// produto.nome = 'Outro nome'

// mostra a configuração do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

console.log(produto)
console.log(spread)
console.log(assign)
console.log(caneca)
console.log(Object.entries(produto))
console.log(Object.keys(produto))
console.log(Object.values(produto))
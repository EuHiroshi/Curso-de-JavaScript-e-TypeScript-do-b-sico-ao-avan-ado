function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    // this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome
}
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Almeida')
const data = new Date()

// console.log(p1)
// console.log(p1.nomeCompleto())
// console.log(data)

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) { // junta chave A ao objeto B
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) { // junta chave A ao objeto B
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const produto1 = new Produto('Camisa', 50)
// produto1.desconto(100)
// produto1.aumento(100)
// console.log(produto1)

const produto2 = {
    nome: 'Caneca',
    preco: 10
}
Object.setPrototypeOf(produto2, Produto.prototype)
// produto2.desconto(100)
// produto2.aumento(100)
// console.log(produto2)

const produto3 = Object.create(Produto.prototype)
produto3.nome = 'pod'
produto3.preco = 100
produto3.desconto(10)
console.log(produto3)
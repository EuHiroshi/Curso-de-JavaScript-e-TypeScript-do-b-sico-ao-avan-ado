function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) { 
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) { 
    this.preco = this.preco + (this.preco * (percentual / 100))
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco) // usa Produto como base
    this.cor = cor // pode adicionar outras chaves 
}

// Produto como base e muda Produto para Camiseta
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('Gen', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Verde')
camiseta.aumento(10)
console.log(camiseta)
console.log(produto)

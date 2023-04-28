function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                console.log("bad value")
            }
            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 17

console.log(p1)
console.log(p1.estoque)
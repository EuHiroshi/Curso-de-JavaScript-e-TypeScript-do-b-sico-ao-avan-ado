function Produto(nome, preco, estoque) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // se mostra a chave ou nao
            value: nome, // valor que recebe
            writable: true, // se pode ou nao ser alterado
            configurable: true // se pode ou nao ser reconfigurado
        },
        preco: {
            enumerable: true, // se mostra a chave ou nao
            value: preco, // valor que recebe
            writable: true, // se pode ou nao ser alterado
            configurable: true // se pode ou nao ser reconfigurado
        }
    })
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // se mostra a chave ou nao
        value: estoque, // valor que recebe
        writable: true, // se pode ou nao ser alterado
        configurable: true // se pode ou nao ser reconfigurado
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 20

console.log(p1)
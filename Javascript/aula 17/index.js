const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const {nome: teste, sobrenome, idade} = pessoa;
console.log(teste, sobrenome, idade)

const {endereco: {rua , numero} } = pessoa;
console.log(rua, numero)

const {nome, ...resto} = pessoa;
console.log(nome, resto)
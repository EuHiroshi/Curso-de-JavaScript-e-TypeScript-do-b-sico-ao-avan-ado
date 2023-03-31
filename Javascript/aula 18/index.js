/**
 for - geralmente com iteraveis(arrays ou strings)
 for in - retorna o indice ou chave(strings, arrays ou objetos)
 for of - retorna o valor em si(iteraveis, arrays ou strings)
 */


const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};



for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

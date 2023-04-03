function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        // getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        // setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            // console.log(valor)
        },
        fala(assunto = 'falando sobre nada'){
            return `${this.nome} está ${assunto}.`; // this se refere a quem chama a função
        },
        altura,
        peso,
        // getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
// console.log(p1.nome);
// console.log(p1.sobrenome);
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())
// console.log(p1.imc);
// const p2 = criaPessoa('Maria', 'Joaquina', 1.62, 42);
// console.log(p2.imc());
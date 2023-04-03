// IIFE -> Immediately invoked function expression

(function(idade, peso, altura){
    const sobreNome = 'Miranda';
    function criaNome(nome){
        return nome + ' ' + sobreNome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(`Idade: ${idade}`)
    console.log(`Peso: ${peso}kg`)
    console.log(`Altura: ${altura}m`)

})(30, 80, 1.80);

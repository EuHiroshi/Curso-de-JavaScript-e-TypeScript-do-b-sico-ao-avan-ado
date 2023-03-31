function meuEscopo() {
    // adiciona os resultados do forms em uma constante // resultado tb
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    // array de pessoas
    const pessoas = [];
    // função de pegar os resultados do forms
    function recebeEventoForm(evento) {
        evento.preventDefault(); // previne a pagina recarregar a cada envio

        const nome = form.querySelector('.nome'); // recebe o nome
        const sobrenome = form.querySelector('.sobrenome'); // recebe o sobrenome 
        const peso = form.querySelector('.peso'); // recebe o peso
        const altura = form.querySelector('.altura'); // recebe a altura
        // adiciona os dados no array
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        // mostra os dados salvos de cada forms enviado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
// chama a função
meuEscopo();
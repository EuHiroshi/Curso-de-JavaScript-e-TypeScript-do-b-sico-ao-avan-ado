const data = new Date();
const Semana = data.getDay();
const mes = data.getMonth() + 1;
const diaHoje = data.getDate();
const anoAtual = data.getFullYear();
const horas = data.getHours();
const minutos = data.getMinutes();

// Da pra fazer usando array
function getDay(num) {
    switch (num) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-feira';
        case 2:
            return 'Terça-feira';
        case 3:
            return 'Quarta-Feira'
        case 4:
            return 'Quinta-Feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
    }
}

// Da pra fazer usando array
/* 
funcao 
const mes = ['janeiro', 'fevereiro', ..., 'dezembro']
return mesHoje = mes[num]
*/
function getMonth(num) {
    switch (num) {
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}

function arrumaHorario(num) {

    if (num < 10) {
        return '0' + num;
    } else {
        return num
    }
}

const horasAgora = arrumaHorario(horas);
const minutosAgora = arrumaHorario(minutos);

const diaSemanaHoje = getDay(Semana);
const mesHoje = getMonth(mes)

// console.log(`${diaSemanaHoje}, ${diaHoje} de ${mesHoje} de ${anoAtual}`);
// console.log(`${horasAgora}:${minutosAgora}`)

const dataHoje = document.getElementById('dataHoje');

dataHoje.innerHTML += `<p>${diaSemanaHoje}, ${diaHoje} de ${mesHoje} de ${anoAtual}</p>`;
dataHoje.innerHTML += `<p>${horasAgora}:${minutosAgora}</p>`;

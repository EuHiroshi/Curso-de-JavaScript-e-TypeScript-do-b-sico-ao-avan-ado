// (ano, mes, dia, hora, minutos, segundos, milisegundos) => data
// const tresHoras = 60 * 60 * 3 * 1000; // js usa milisegundos
// const umDia = 60 * 60 * 24 * 1000; // segundos * segundos * horas * milisegundos
// const data = new Date(0 + tresHoras - umDia);
// const data = new Date(2019, 3, 20, 15, 14, 60); // se algum dado passar do limite, ele ajusta automaticamente, 60 segundos = 1 minuto 
// const data = new Date('2019-04-20 20:20:59');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // mes começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Segundos', data.getSeconds());
// console.log('Milisegundos', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - domingo // 6 - sabado
// console.log(data.toString());
// console.log(Date.now());
// const dataHoje = new Date(1678977705013);
// console.log(dataHoje);
function zeroAEsquerda(num) {
    return num >= 10 ? num : '0' + num;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
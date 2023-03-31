const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

// comando para pegar a cor do fundo da pagina
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
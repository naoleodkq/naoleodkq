const buttonTheme = document.getElementById("bTheme");
const corpo = document.body;


const temaSalvo = localStorage.getItem('meuTema');

if (temaSalvo === 'escuro') {
    corpo.classList.toggle('bTheme');
}

function changeTheme() {
    corpo.classList.toggle('bTheme');

    if (corpo.classList.contains('bTheme')) {
        localStorage.setItem('meuTema', 'escuro');
    } else {
        localStorage.setItem('meuTema', 'claro');
    }
}
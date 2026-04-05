const buttonTheme = document.getElementById("btnThemeId");
const corpo = document.body;

const btnMostrarDesc = document.getElementById('mostrarDesc');
const descAlbum = document.getElementById('descAlbum');


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

btnMostrarDesc.addEventListener('click', () => {
  // o toggle ativa/desativa a classe "visivel"
  descAlbum.classList.toggle('visivel');
  
  // verifica se a classe "visivel" ta ativa ou nao
  if (descAlbum.classList.contains('visivel')) {
    btnMostrarDesc.innerText = '-';
  }
  else {
    btnMostrarDesc.innerText = '+';
  }
});
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


if (btnMostrarDesc) {
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
}


// JS da prof
const formulario = document.getElementById('formCard');

if (formulario) {
  formulario.addEventListener('submit', function(evento){
      evento.preventDefault();
      const novo = {
      nomeAlbum:document.getElementById('nomeAlbum').value,
      linkAlbum:document.getElementById('linkAlbum').value,
      nomeArtista:document.getElementById('nomeArtista').value,
      linkArtista:document.getElementById('linkArtista').value,
      generoAlbum:document.getElementById('generoAlbum').value,
      descricaoAlbum:document.getElementById('descricaoAlbum').value,
      imagemAlbum:document.getElementById('imagemAlbum').value,
      descricaoImagem:document.getElementById('descricaoImagem').value
      };
    //guardando um pedaco do cod html pra futuramente fazer o card eita eita
    const novoCard = `
      <div class="superior">
        <img src = "${novo.imagemAlbum}">
        <h2>${novo.nomeAlbum}</h3>
        <a href="${novo.linkArtista}}">${novo.nomeArtista}</a>
        <h4>${novo.generoAlbum}</h4>
        <a href="${novo.linkAlbum}
      </div>
      <div class = "cardDescricao">
        <p>${novo.descricaoAlbum}</p>
      </div>
    `;
    colecao.innerHTML += novoCard;
    form.reset();

    console.log('novoCard');
    })
  }

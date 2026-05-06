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
        <img src="${novo.imagemAlbum}" id="capaAlbum"></img>
        <h2 id="tituloAlbum">${novo.nomeAlbum}</h2>
        <a href="${novo.linkArtista}}" id="artistaAlbum">${novo.nomeArtista}</a>
        <h4 id="categoriasAlbum">${novo.generoAlbum}</h4>
        <a href="${novo.linkAlbum}" id="albumSpotify" target="_blank"><span class="button-inner"><img class="logo" src="media/spotifyLogo.png"></span></a>
      </div>
      <div class="cardDescricao">
        <button id="mostrarDesc">+</button>
        <p id="descAlbum">${novo.descricaoAlbum}</p>
      </div>
      `;
    colecao.innerHTML += novoCard;
    formCard.reset();

    console.log('novoCard');
    })
  }

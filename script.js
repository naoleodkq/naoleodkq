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

// JS da prof
const formulario = document.querySelector('.formCard'); // Use a classe ou ID correto

if (formulario) { // Só executa se estivermos na página do formulário
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();

        const novoAlbum = {
            nomeAlbum: document.getElementById('nomeAlbum').value,
            linkAlbum: document.getElementById('linkAlbum').value,
            nomeArtista: document.getElementById('nomeArtista').value,
            linkArtista: document.getElementById('linkArtista').value,
            generoAlbum: document.getElementById('generoAlbum').value,
            descricaoAlbum: document.getElementById('descricaoAlbum').value,
            imagemAlbum: document.getElementById('imagemAlbum').value, // Nota: caminho de arquivo local no localStorage é chatinho, prefira links de internet
            descricaoImagem: document.getElementById('descricaoImagem').value
        };

        // 1. Pegar o que já tem no localStorage ou criar uma lista vazia
        const listaAlbuns = JSON.parse(localStorage.getItem('meusAlbuns')) || [];

        // 2. Adicionar o novo álbum na lista
        listaAlbuns.push(novoAlbum);

        // 3. Salvar de volta no localStorage (transformando em texto)
        localStorage.setItem('meusAlbuns', JSON.stringify(listaAlbuns));

        alert('Álbum salvo com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página de exibição
    });
}

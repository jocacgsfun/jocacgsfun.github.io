document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector("nav");
    const lowResButton = document.getElementById("lowresbutton");

    // Garante que o botão existe
    if (lowResButton) {
        lowResButton.addEventListener('click', () => {
            nav.classList.toggle("active");
        });
    }

    // Fecha o menu quando voltar para tela maior
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            nav.classList.remove("active");
        }
    });
});

// Função para redirecionar para a home
function gohome() {
    let home = document.getElementById("homebutton").value;
    if (home) {
        window.location.href = home;
    }
}

let playlistStart = document.getElementById('playlistStart');  // Define onde suas playlists começam

// Função para adicionar a playlist
function addPlaylist() {
    const name = prompt("Nome da Playlist");
    if (name) {
        createPlayList(name);
    } else {
        alert("Please provide a valid name for the playlist.");
    }
}

// Função para criar a playlist
function createPlayList(name) {
    const newPlaylist = document.createElement("div");
    newPlaylist.classList.add("playlistDiv");

    const playlistTitle = document.createElement("h1");
    playlistTitle.textContent = name;
    newPlaylist.appendChild(playlistTitle);

    const playlistButton = document.createElement("button");
    playlistButton.textContent = "Adicionar Musica";
    playlistButton.classList.add("add-song-button");
    playlistButton.addEventListener('click', addMusic);
    newPlaylist.appendChild(playlistButton);

    // Criar a div para a música
    const newMusic = document.createElement("div");
    newMusic.classList.add("musicDiv");
    newPlaylist.appendChild(newMusic);

    // Adiciona o ID para cada playlist (não necessário para funcionar, mas útil para referência)
    const addMusicId = 'addMusic_' + new Date().getTime();
    playlistButton.id = addMusicId;

    // Adiciona a playlist no início
    if (playlistStart) {
        playlistStart.insertBefore(newPlaylist, playlistStart.firstChild);
    } else {
        document.body.appendChild(newPlaylist);
    }
}

// Função para adicionar a música dentro da div da playlist
function addMusic() {
    const music_link = prompt("Link da Musica");
    if (music_link) {
        createMusic(music_link);
    } else {
        alert("Please provide a valid link for the playlist.");
    }
}

// Função para criar a música e adicionar o vídeo na div da playlist
function createMusic(music_link) {
    // Verificar e converter o link para o formato de incorporação do YouTube
    const embedLink = convertToEmbedLink(music_link);
    if (!embedLink) {
        alert("Por favor, forneça um link válido do YouTube.");
        return;
    }

    // Criar o iframe para o vídeo
    const iframe = document.createElement("iframe");
    iframe.style.margin = "30px";
    iframe.src = embedLink;
    iframe.width = "300";  // Largura do vídeo
    iframe.height = "200"; // Altura do vídeo
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;

    // Adicionar o iframe dentro da div de música
    const playlistDiv = document.querySelector(".playlistDiv");
    const newMusic = playlistDiv.querySelector(".musicDiv");  // Agora encontramos a div da música corretamente
    newMusic.appendChild(iframe); // Agora a música (iframe) é adicionada corretamente dentro da div

    // Opcional: Ajustando a altura da div da playlist se necessário
    playlistDiv.style.height = "330px";
}

// Função para verificar e converter o link para o formato de incorporação do YouTube
function convertToEmbedLink(link) {
    const youtubePattern = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/))([^&?\/\s]+)/;
    const match = link.match(youtubePattern);

    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;  // Retorna o link de incorporação
    }
    return null;  // Retorna null se não for um link válido do YouTube
}

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

// Atualiza o viewer (se for usar isso em algum iframe)
function updateViewer(url) {
    document.getElementById('viewer').src = url;
}


function addPlaylist() {
    const name = prompt("Nome da Playlist");
    if (name) {
        createPlayList(name);
    } else {
        alert("Please provide a valid name for the playlist.");
    }
}

function createPlayList(name) {
    // Playlist name alert
    window.alert(name);

    // Create Playlist Div
    const newPlaylist = document.createElement("div");
    newPlaylist.classList.add("playlistDiv");

    // Create an H1 element for the playlist name
    const playlistTitle = document.createElement("h1");
    playlistTitle.textContent = name;
    newPlaylist.appendChild(playlistTitle);

    // Create a button to add music
    const playlistButton = document.createElement("button");
    playlistButton.textContent = "Adicionar Musica";
    playlistButton.classList.add("add-song-button")
    newPlaylist.appendChild(playlistButton);

    // Check if there's a start and add to the main.
    if (playlistStart) {
        playlistStart.insertBefore(newPlaylist, playlistStart.firstChild);
    } else {
        document.body.appendChild(newPlaylist);
    }
}



// window.alert("Button class list: ", playlistButton.classList);
// const playlistButton = document.createElement('button');
// playlistButton.textContent = 'Adicionar Musica';
// playlistButton.classList.add("add-song-button");
// playlistButton.addEventListener('click', addMusic)
// newPlaylist.appendChild(playlistButton);

function addMusic() {
    window.alert("oi");
}
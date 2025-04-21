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

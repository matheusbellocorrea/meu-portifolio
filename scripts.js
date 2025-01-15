// Controle do Botão "Voltar ao Topo"
window.onscroll = function () {
    const btnTopo = document.getElementById('btnTopo');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = 'block'; // Exibe o botão
    } else {
        btnTopo.style.display = 'none'; // Oculta o botão
    }
};

// Função para rolar suavemente ao topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave ao rolar
    });
}

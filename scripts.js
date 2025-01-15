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


function copiarEmail() {
    const email = "matheusbellocorrea1@gmail.com"; // Substitua pelo seu endereço de e-mail
    navigator.clipboard.writeText(email).then(() => {
        // Exibe a mensagem de confirmação
        const mensagem = document.getElementById("email-copiato");
        mensagem.style.display = "block";

        // Oculta a mensagem após 2 segundos
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Erro ao copiar o e-mail: ", err);
    });
}
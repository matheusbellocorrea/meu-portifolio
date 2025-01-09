const translations = {
    'it': {
        'Il Mio Portfolio': 'Il Mio Portfolio',
        'Benvenuto nel mio spazio professionale': 'Benvenuto nel mio spazio professionale',
        'Su di me': 'Su di me',
        'Le mie Implementazioni': 'Le mie Implementazioni',
        'Contatti': 'Contatti',
        'Tutti i diritti riservati.': 'Tutti i diritti riservati.'
    },
    'pt-br': {
        'Il Mio Portfolio': 'Meu Portfólio',
        'Benvenuto nel mio spazio professionale': 'Bem-vindo ao meu espaço profissional',
        'Su di me': 'Sobre Mim',
        'Le mie Implementazioni': 'Minhas Implementações',
        'Contatti': 'Contato',
        'Tutti i diritti riservati.': 'Todos os direitos reservados.'
    }
};

// Controle do Dropdown de Idioma
document.getElementById('languageDropdown').addEventListener('click', function (event) {
    const dropdownMenu = this.nextElementSibling;

    // Fecha outros menus abertos
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        if (menu !== dropdownMenu) menu.classList.remove('show');
    });

    // Alterna a visibilidade do menu atual
    dropdownMenu.classList.toggle('show');

    // Impede que o clique feche o colapso no mobile
    event.stopPropagation();
});

// Fecha o dropdown se clicar fora dele
document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
        menu.classList.remove('show');
    });
});

// Controle do Botão "Voltar ao Topo"
window.onscroll = function () {
    const btnTopo = document.getElementById('btnTopo');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
};

// Função para rolar suavemente ao topo
function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Função para mudar o idioma com base no botão clicado
function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

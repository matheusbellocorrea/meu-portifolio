const translations = {
    'it': {
        'Il Mio Portfolio': 'Il Mio Portfolio',
        'Benvenuto nel mio spazio professionale': 'Benvenuto nel mio spazio professionale',
        'Su di me': 'Su di me',
        'Qui puoi raccontare la tua carriera professionale e i tuoi obiettivi.': 'Qui puoi raccontare la tua carriera professionale e i tuoi obiettivi.',
        'Le mie Implementazioni': 'Le mie Implementazioni',
        'Breve descrizione del progetto.': 'Breve descrizione del projeto.',
        'Contatti': 'Contatti',
        'Contattami via e-mail o visita il mio LinkedIn.': 'Contattami via e-mail o visita il mio LinkedIn.',
        'Tutti i diritti riservati.': 'Tutti i diritti riservati.'
    },
    'pt-br': {
        'Il Mio Portfolio': 'Meu Portfólio',
        'Benvenuto nel mio spazio professionale': 'Bem-vindo ao meu espaço profissional',
        'Su di me': 'Sobre Mim',
        'Qui puoi raccontare la tua carriera professionale e i tuoi obiettivi.': 'Aqui você pode contar sua trajetória profissional e seus objetivos.',
        'Le mie Implementazioni': 'Minhas Implementações',
        'Breve descrizione del projeto.': 'Descrição breve do projeto.',
        'Contatti': 'Contato',
        'Contattami via e-mail o visita il mio LinkedIn.': 'Entre em contato por e-mail ou visite meu LinkedIn.',
        'Tutti i diritti riservati.': 'Todos os direitos reservados.'
    }
};

// Controle do Dropdown de Idioma
document.getElementById('languageDropdown').addEventListener('click', function () {
    const dropdownMenu = this.nextElementSibling;

    // Alterna a visibilidade da lista de idiomas
    dropdownMenu.classList.toggle('show');
});

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

// Define o idioma padrão como Italiano
setLanguage('it');
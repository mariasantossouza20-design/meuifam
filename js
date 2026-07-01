// Seleção dos elementos do DOM
const root = document.documentElement;
const btnNormal = document.getElementById('filtro-normal');
const btnAmbar = document.getElementById('filtro-ambar');
const btnAmarelo = document.getElementById('filtro-amarelo');
const btnZoomIn = document.getElementById('zoom-in');
const btnZoomOut = document.getElementById('zoom-out');

let escalaFonte = 1.0;

// Função para redefinir estados dos botões de filtro
function atualizarBotoesFiltro(botaoAtivo) {
    document.querySelectorAll('.btn-filtro').forEach(btn => {
        btn.classList.remove('ativo');
        btn.setAttribute('aria-pressed', 'false');
    });
    botaoAtivo.classList.add('ativo');
    botaoAtivo.setAttribute('aria-pressed', 'true');
}

// Lógica dos Filtros Ópticos Seletivos
btnNormal.addEventListener('click', () => {
    root.style.setProperty('--filtro-cor-overlay', 'transparent');
    atualizarBotoesFiltro(btnNormal);
});

btnAmbar.addEventListener('click', () => {
    // Filtro Âmbar: Melhora o contraste bloqueando luz azul (simulação digital)
    root.style.setProperty('--filtro-cor-overlay', 'rgba(255, 126, 0, 0.15)');
    atualizarBotoesFiltro(btnAmbar);
});

btnAmarelo.addEventListener('click', () => {
    // Filtro Amarelo: Reduz fotofobia e otimiza iluminação interna
    root.style.setProperty('--filtro-cor-overlay', 'rgba(255, 255, 0, 0.2)');
    atualizarBotoesFiltro(btnAmarelo);
});

// Lógica de Escalonamento Óptico (Zoom)
btnZoomIn.addEventListener('click', () => {
    if (escalaFonte < 2.5) {
        escalaFonte += 0.2;
        root.style.setProperty('--multiplicador-fonte', `${escalaFonte}rem`);
    }
});

btnZoomOut.addEventListener('click', () => {
    if (escalaFonte > 0.8) {
        escalaFonte -= 0.2;
        root.style.setProperty('--multiplicador-fonte', `${escalaFonte}rem`);
    }
});

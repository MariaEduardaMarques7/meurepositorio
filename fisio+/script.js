window.onload = function() {
    var estaLogado = localStorage.getItem('esta_logado');
    var dadosUsuario = localStorage.getItem('usuario_fisio');


    if (estaLogado === 'sim' && dadosUsuario) {
        var usuario = JSON.parse(dadosUsuario);
        var primeiroNome = usuario.nome.split(' ')[0];


        // Atualiza o menu superior
        const menuLogin = document.getElementById('menu-login');
        if (menuLogin) {
            menuLogin.innerHTML = `
                <div class="user-area">
                    <span>Olá, <strong>${primeiroNome}</strong></span>
                    <span class="btn-sair" onclick="sairDaConta()">Sair</span>
                </div>
            `;
        }


        // --- MODO ADMINISTRATIVO ---
        // Esconde o conteúdo público para mostrar o painel de gestão
        const publico = document.getElementById('conteudo-publico');
        const heroTitle = document.getElementById('titulo-hero');
        const heroSub = document.getElementById('subtitulo-hero');
        const heroCta = document.getElementById('cta-container');
        const heroSection = document.getElementById('hero-section');
        const painel = document.getElementById('painel-gestao');


        if (publico) publico.style.display = 'none';
        if (heroTitle) heroTitle.innerText = "Área Restrita";
        if (heroSub) heroSub.style.display = 'none';
        if (heroCta) heroCta.style.display = 'none';
        if (heroSection) heroSection.style.height = '200px';
        if (painel) painel.style.display = 'block';
    }
};


/**
 * Função para limpar o login e recarregar a página
 */
function sairDaConta() {
    if(confirm("Deseja realmente sair do sistema?")) {
        localStorage.removeItem('esta_logado');
        window.location.reload();
    }
}

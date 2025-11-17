document.addEventListener('DOMContentLoaded', () => {
    
    // Pega o caminho da página atual (ex: "/historia.html")
    const currentPage = window.location.pathname.split('/').pop();

    // Se estiver na raiz (ex: "meusite.com/"), considera como "index.html"
    const pageName = currentPage === '' ? 'index.html' : currentPage;

    // Seleciona todos os links da barra de navegação
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        // Remove a classe 'active' de todos (limpeza)
        link.classList.remove('active');

        // Pega o nome do arquivo do link (ex: "historia.html")
        const linkPage = link.getAttribute('href').split('/').pop();

        // Se o nome do arquivo do link for igual ao da página atual,
        // adiciona a classe 'active'
        if (linkPage === pageName) {
            link.classList.add('active');
        }
    });
});
// Variável para controlar a imagem atual
let imagemAtual = 1;

// Função para atualizar a imagem com base na variável imagemAtual
function atualizarImagem() {
    const imagem = document.getElementById('imagem-sequencia');
    imagem.src = `caminho/para/imagem_${imagemAtual}.jpg`;
}

// Adicionar um ouvinte de evento de rolagem à janela
window.addEventListener('scroll', function() {
    // Verificar se o usuário rolou até certo ponto da página (por exemplo, metade da altura da página)
    const alturaDaPagina = document.body.clientHeight;
    const metadeDaPagina = alturaDaPagina / 2;

    if (window.scrollY > metadeDaPagina) {
        // Aumentar a variável imagemAtual para mostrar a próxima imagem na sequência
        imagemAtual++;

        // Verificar se a imagemAtual está além da última imagem na sequência e reiniciá-la
        if (imagemAtual > 10) {
            imagemAtual = 1;
        }

        // Atualizar a imagem exibida
        atualizarImagem();
    }
});

// Inicializar a imagem
atualizarImagem();

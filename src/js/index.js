const botoesCarrossel = document. querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel. forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       
        desativarBotaoSelecionado();
        
        selecionarBotaoCarrosel(botao);
        
        esconderImagemAtivaDeFundo();
        
        mostrarImagemAtiva(indice);
    })
})

function mostrarImagemAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtivaDeFundo() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

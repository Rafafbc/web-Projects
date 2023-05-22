/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");     // busca pelo ID 'botao-alterar-tema' do HTML

//passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body

const body = document.querySelector("body");    // busca pelo seletor 'body' do HTML

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")      // busca pela classe(seletor) 'imagem-botao' da tag 'img' da tag 'button'

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")  // retorna True e False caso contenha a classe 'modo-escuro'

    body.classList.toggle("modo-escuro");   // adicionar a classe 'modo-escuro' no body, quando ela não tiver, e remove a classe 'modo-escuro', quando ela tiver.

    if (modoEscuroEstaAtivo) {
        // passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")    // altera o atributo 'src' da tag 'img'
    }
});

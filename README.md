<h1 align="center" id="top" border="none">🪐 SpaceX 🪐</h1>

### Link do Surge: <a href="http://daffy-experience.surge.sh/" target="_blank" title="Veja o projeto">SpaceX</a>

<div align="center">
<a href="#sobre">Sobre</a> | <a href="#tecnologias">Tecnologias</a> | <a href="#funciona">O que funciona</a> | <a href="#nao-funciona">Backlog</a> | <a href='#img-desktop'>Imagens Desktop</a> | <a href='#img-mobile'>Imagens Mobile</a> 
</div>

## <h2 id="sobre">📓 Sobre<h2>

<p align="center">🚀 Projeto desenvolvido conforme proposta do bootcamp ministrado pela Labenu para a criação de um App de serviços de viagens espaciais, desenvolvido em React.</p>


## <h2 id="tecnologias">🛠️ Tecnologias</h2> 
As seguintes ferramentas foram usadas na construção do projeto:

* JavaScript
* React
* React hooks
* React Router
* <a href="https://documenter.getpostman.com/view/9133542/TzCTZkQr" target="_blank">API</a>
* Styled-components

## <h2 id="funciona">✔️ O que funciona</h2>

* Projeto com 7 páginas: Homepage, Lista de Destinos, Página de Inscrição de Candidato, Página de Login, HomePage Administrador, Página de Detalhes de Viagem, Página de Criar Novo Destino;
  
    ![fluxo](https://user-images.githubusercontent.com/71045022/160829725-e7174ca5-1f68-4892-8e7a-c1a9c09845b3.JPG)
  
* Inicialmente, o(a) user é direcionado(a) para Homepage, página onde pode escolher entre dois fluxos:
    * Área administrativa - necessário login para acessar;
    * Lista de destinos - para candidatos, onde não é obrigado ter login.
* Caso seja escolhido ver os destinos, o(a) user será redirecionado(a) à parte pública (sem login) do site, onde qualquer user é capaz de:
    * Ver a lista de destinos existentes;
    * Ter acesso à página de Inscrição de Candidato, onde pode se inscrever para uma viagem existente.
* Caso seja escolhido entrar na área administrativa, o(a) user é redirecionado(a) para uma página de Login. Após fazer o login com uma conta válida, terá acesso à parte privada, onde é capaz de:
    * Ver a lista de todos os destivos com a possibilidade de deletá-los;
    * Ter acesso a página Criar Novo Destino;
    * Ter acesso à página de Detalhes de Viagem ao clicar no nome do destino, onde poderá:
        * Conseguir ver a lista de candidatos que se aplicaram para esse destino e ainda estão pendentes;
        * Aprovar ou reprovar candidatos para a viagem;
        * Ver uma lista atualizada de candidatos aprovados.
* Foi feito responsividade para celulares (< 480px) e a responsividade funciona bem para telas de notebooks.

## <h2 id="nao-funciona">📋 Backlog</h2>
* BugFix: background-image pode não ser renderizado na tela e é necessário fechar e reabrir a aplicação.
* Header:
    * Pôr onClick na logo para redirecionar para página de homepage;
    * Pôr backbutton no lado direito da tela.

## <h2 id="img-desktop">💻 Imagens Desktop</h2>

![labex1](https://user-images.githubusercontent.com/71045022/154946030-91b16a79-2264-4a10-b16f-42654dde3111.JPG)

![labex2](https://user-images.githubusercontent.com/71045022/154946019-69468a35-fdcf-44bd-b54f-7f421682d9d2.JPG)

## <h2 id="img-mobile">📱 Imagens Mobile</h2>

![labex3](https://user-images.githubusercontent.com/71045022/154946028-d46684a5-0063-4710-ace2-2e9252db2f6d.JPG)
________________________________________

<a href='#top'>Voltar para o topo</a>

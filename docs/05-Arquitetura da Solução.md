# Arquitetura da Solução

Esta seção documenta os detalhes tecnicos da solução implementada e seus componentes. 

## Diagrama de componentes

A figura a seguir descreve a relação entre os componentes da solução

<img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-adocao-caridosa-de-animais/main/docs/assets/05-Arquitetura%20da%20Solução.assets/Equipe%20Cão%20-%20Diagrama%20de%20solucao.png" alt="Figura - Arquitetura da Solução"/>

<center>Figura - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Páginas Web** - Meio de interacao com o usuario
  - **Navegador** - Renderiza o HTML e CSS de uma pagina web requisitada e executa o seu Javascript.
  - **Local Storage** - Banco de dados em JSON, armazenado na memoria utilizada pelo navegador do usuario.
  - **Javascript, HTML e CSS** - Conteudo da pagina web requisitada via internet, o HTML e CSS descrevem como a pagina deve aparecer e o Javascript define seu comportamento.
 - **Brasil API** - Web API comumente utilziada para obtencao de informacoes publicas, como endereco a partir de um CEP.
 - **Heroku** - Provedor de servidores na nuvem, vai direcionar o conteudo da pagina web para o navegador do usuario. 

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
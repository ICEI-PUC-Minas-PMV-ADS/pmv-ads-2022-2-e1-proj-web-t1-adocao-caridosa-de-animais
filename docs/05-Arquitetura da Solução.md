# Arquitetura da Solução

Esta seção documenta os detalhes tecnicos da solução implementada e seus componentes. 

## Diagrama de componentes

A figura a seguir descreve a relação entre os componentes da solução

![](assets/05-Arquitetura%20da%20Solu%C3%A7%C3%A3o.assets/Equipe%20C%C3%A3o%20-%20Diagrama%20de%20solucao.png)

<center>Figura - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Páginas Web** - Meio de interacao com o usuario
  - **Navegador** - Renderiza o HTML e CSS de uma pagina web requisitada e executa o seu Javascript.
  - **Local Storage** - Banco de dados em JSON, armazenado na memoria utilizada pelo navegador do usuario.
  - **Javascript, HTML e CSS** - Conteudo da pagina web requisitada via internet, o HTML e CSS descrevem como a pagina deve aparecer e o Javascript define seu comportamento.
 - **Brasil API** - Web API comumente utilziada para obtencao de informacoes publicas, como endereco a partir de um CEP.
 - **Heroku** - Provedor de servidores na nuvem, vai direcionar o conteudo da pagina web para o navegador do usuario. 


## Hospedagem

A hospedagem foi feita na plataforma [Heroku](https://www.heroku.com/home). O host está vinculado ao repositório[ adocao-caridosa-de-animais](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-adocao-caridosa-de-animais), ou seja, a cada push feito na branch "main" atualizará o host com as novas alterações. O acesso ao host disponivel no link abaixo:

> - [Link de acesso da Equipe Cão](https://equipecao.herokuapp.com/)
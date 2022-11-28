# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Testes do Home
![Comportamentos da home](assets/08-Plano%20de%20Testes%20de%20Software/comportamentos_home.png)

### Cenário 1
Dado: A pagina home carregou   
Então: Um acesso para pesquisa de animais disponiveis para adoção deve ser mostrado

### Cenário 2
Dado: A pagina home carregou   
Então: Um acesso para pesquisa de trabalhos voluntarios disponiveis deve ser mostrado

### Cenário 3
Dado: A pagina home carregou   
Então: Um acesso para pesquisa de ONGs disponiveis deve ser mostrado

### Cenário 4
Dado: A pagina home carregou   
Então: Um acesso para a pagina de autenticação deve ser mostrado

### Cenário 5
Dado: A pagina home carregou   
Então: Um acesso para a pagina de cadastro deve ser mostrado

## Testes do Login
![Comportamentos da home](assets/08-Plano%20de%20Testes%20de%20Software/comportamentos_login.png)

## Cenário 1
Dado: A pagina home carregou   
Então: Um acesso para a pagina de cadastro deve ser mostrado

## Cenário 2
Dado: Um email e senha validos no banco   
Quando: Um email valido for preenchido   
Quando: Uma senha valida correspondente for preenchida   
Então: O usuario será autenticado e tera acesso a sua tela de gerenciamento correspondente

## Cenário 3
Quando: Um email ou senha invalidos forem preenchidos   
Então: Uma mensagem de erro informando o usuario deve aparecer

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

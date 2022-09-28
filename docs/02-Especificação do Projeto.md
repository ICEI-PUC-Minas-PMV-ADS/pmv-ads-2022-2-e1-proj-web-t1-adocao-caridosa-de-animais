# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

<table class="tg">
<thead>
  <tr>
    <th class="tg-0pky" rowspan="2">
      <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-adocao-caridosa-de-animais/main/docs/assets/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.assets/Persona%20-%20Ana%20Clara.png" width="272" height="275">
    </th>
    <th class="tg-pie6" colspan="2"><span style="font-weight:bold">Ana Clara</span></th>
  </tr>
  <tr>
    <th class="tg-0pky">●Fundação: Abril de 2020<br><br>●Ocupação: Fundadora da<br>ONG Safe Animal</th>
    <th class="tg-0pky">●Descrição: <br>Voluntários unidos <br>em defesa <br>dos animais.</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">●Frustração:As limitações,<br><br>para encontrar novos tutores<br><br>e possíveis parceiros.</td>
    <td class="tg-0pky">●Motivação:<br>Salvar todos os animais,<br>em situação de rua.</td>
    <td class="tg-0pky">●Objetivo:Dar um<br>bom lar para cada<br>animal resgatado.</td>
  </tr>
</tbody>
</table>

<table>
<thead>
  <tr>
    <th rowspan="2">
      <img src="https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e1-proj-web-t1-adocao-caridosa-de-animais/e63e7cd663ec57befa5c8e4140ee278f7ec48556/docs/assets/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.assets/Persona%20-%20Paulo%20Junqueira.png" alt="Image" width="272" height="275">
    </th>
    <th colspan="2">Paulo Junqueira</th>
  </tr>
  <tr>
    <th>●Idade: 34 anos<br><br>●Ocupação: Analista e<br>Desenvolvedor de Sistema<br>Sócio de uma Startup que <br>tem como objetivo trazer<br>inovações tecnológicas.<br></th>
    <th>●Hobbies:<br>1.Natação<br>2.Jogar video game<br>3.Tocar violão<br></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>●Frustração:A dificuldade de encontrar<br> um ambiente onde tenha muitas opções<br>de ONGs para realizar a adoção de <br>maneira mais prática.<br></td>
    <td>●Motivação:Se sente só,<br>e gostaria de um animal,<br>para fazer companhia.<br></td>
    <td>●Objetivo:Adotar um,<br>animal de estimação.<br></td>
  </tr>
</tbody>
</table>

## Histórias de Usuários

<table class="tg">
<thead>
  <tr>
    <th class="tg-99c3"><span style="font-weight:bold">Persona</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Desejo</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Para que</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">Ana Clara</td>
    <td class="tg-0lax">Visualizar os perfis de pedidos de adoção e trabalho voluntário de maneira mais específica</td>
    <td class="tg-0lax">Ter uma noção maior da situação do candidato a tutor ou trabalho voluntário</td>
  </tr>
  <tr>
    <td class="tg-0lax">Ana Clara</td>
    <td class="tg-0lax">Expor informações de contato, meio de doações e animais para adoção da ONG</td>
    <td class="tg-0lax">Para divulgação centralizada de animais disponíveis, meio de sustento da ONG e meio de contato</td>
  </tr>
  <tr>
    <td class="tg-0lax">Paulo Junqueira</td>
    <td class="tg-0lax">Sistema de busca por animal/porte específico</td>
    <td class="tg-0lax">Achar com maior facilidade o animal desejado</td>
  </tr>
  <tr>
    <td class="tg-0lax">Paulo Junqueira</td>
    <td class="tg-0lax">Visualizar os perfis das ONGs</td>
    <td class="tg-0lax">Avaliar melhor a possibilidade da adoção</td>
  </tr>
</tbody>
</table>

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

<table class="tg">
<thead>
  <tr>
    <th class="tg-99c3"><span style="font-weight:bold">ID</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Descrição</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Prioridade</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">RF-1</td>
    <td class="tg-0lax">Disponibilizar a visualização dos animais que estão para adoção</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-2</td>
    <td class="tg-0lax">Possibilidade de se cadastrar como ONG ou Tutor</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-3</td>
    <td class="tg-0lax">Oferta de um ou mais tipos de doação para as ONGs</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-4</td>
    <td class="tg-0lax">Tutor precisa poder realizar o pedido de adoção</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-5</td>
    <td class="tg-0lax">ONG precisam gerenciar os pedidos de adoção</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-6</td>
    <td class="tg-0lax">Possibilidade do tutor de se voluntariar para trabalhos voluntários nas ONGs</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-7</td>
    <td class="tg-0lax">Possibilidade da  ONG gerenciar as propostas de trabalho voluntário</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RF-8</td>
    <td class="tg-0lax">Possibilidade da ONG de registar animais para adoção</td>
    <td class="tg-0lax">Alta</td>
  </tr>
</tbody>
</table>


### Requisitos não Funcionais

<table class="tg">
<thead>
  <tr>
    <th class="tg-99c3"><span style="font-weight:bold">ID</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Descrição</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Prioridade</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">RNF-1</td>
    <td class="tg-0lax">O site deve ser publicado em um ambiente acessível publicamente na internet (Relp.it,GitHub ,Heroku)</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RNF-2</td>
    <td class="tg-0lax">O site deverá ser responsivo permitindo uma visualização em um celular de forma adequada</td>
    <td class="tg-0lax">Alta</td>
  </tr>
  <tr>
    <td class="tg-0lax">RNF-3</td>
    <td class="tg-0lax">O site deverá ter bom nível de contraste entre os elementos da tela em conformidade</td>
    <td class="tg-0lax">Média</td>
  </tr>
  <tr>
    <td class="tg-0lax">RNF-4</td>
    <td class="tg-0lax">O site deverá ser compatível com os principais navegadores do mercado como: (Chrome,Firefox,Edge)</td>
    <td class="tg-0lax">Alta</td>
  </tr>
</tbody>
</table>

## Restrições

<table class="tg">
<thead>
  <tr>
    <th class="tg-99c3"><span style="font-weight:bold">ID</span></th>
    <th class="tg-99c3"><span style="font-weight:bold">Descrição</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">RE-1</td>
    <td class="tg-0lax">O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 19/12/22</td>
  </tr>
  <tr>
    <td class="tg-0lax">RE-2</td>
    <td class="tg-0lax">O aplicativo deve se restringir às tecnologias básicas da Web no Frontend</td>
  </tr>
  <tr>
    <td class="tg-0lax">RE-3</td>
    <td class="tg-0lax">A equipe não pode subcontratar o desenvolvimento do trabalho</td>
  </tr>
</tbody>
</table>
# Patas que Guiam

Site institucional de uma ONG fictícia dedicada à formação e adoção de cães-guia para pessoas cegas ou com baixa visão. Projeto acadêmico da disciplina de Desenvolvimento Front-End, construído como uma Single Page Application (SPA).

## Sumário

1. Sobre o projeto
2. Tecnologias utilizadas
3. Funcionalidades
4. Como executar o projeto
5. Estrutura de pastas
6. Controle de versões
7. Autor

## Sobre o projeto

A Patas que Guiam é uma organização fictícia que apresenta seus projetos de voluntariado, campanhas de doação e um formulário de cadastro para novos apoiadores. O site foi desenvolvido inteiramente com HTML, CSS e JavaScript puro, sem frameworks, com foco em roteamento client side, validação de formulário e persistência de dados no navegador.

## Tecnologias utilizadas

| Tecnologia | Função no projeto |
|---|---|
| HTML5 | Estrutura semântica das páginas |
| CSS3 | Layout responsivo e identidade visual |
| JavaScript (ES6 Modules) | Roteamento da SPA, validação e persistência |
| SweetAlert2 | Biblioteca externa via CDN para alertas visuais |

## Funcionalidades

1. Navegação estilo SPA por hash routing, entre as rotas sobre, projetos, cadastro e contato.
2. Geração dinâmica de conteúdo com JavaScript (Array.map e join), usada na lista de estados do formulário.
3. Validação de formulário em tempo real, usando a Constraint Validation API nativa do navegador, com mensagens de erro personalizadas.
4. Máscara automática de telefone durante a digitação.
5. Persistência dos dados do cadastro no localStorage, restaurando o formulário preenchido em visitas futuras.
6. Alerta de sucesso estilizado com a biblioteca SweetAlert2.

## Como executar o projeto

Este projeto usa módulos ES6 (import e export). Por esse motivo, ele precisa ser servido por um servidor local, não funciona abrindo o arquivo index.html diretamente pelo navegador (protocolo file://).

### Pré-requisitos

Navegador atualizado (Chrome, Edge ou Firefox).
Editor de código com suporte a servidor local, como o VS Code com a extensão Live Server.

### Passo a passo

1. Clone o repositório:
   git clone https://github.com/LcsAugusto/patas-que-guiam.git

2. Abra a pasta do projeto no VS Code.

3. Clique com o botão direito no arquivo html/index.html e selecione Open with Live Server.

4. O navegador abrirá automaticamente o site na rota inicial.

## Estrutura de pastas

patas-que-guiam
  css        estilos da aplicação
  html       arquivo principal index.html
  imagens    imagens usadas nas seções do site
  js         código JavaScript dividido em módulos
    templates.js    templates de HTML das rotas
    formulario.js    eventos, validação e localStorage
    roteador.js    lógica de roteamento da SPA

## Controle de versões

O projeto segue o padrão GitFlow, organizado nas seguintes branches:

main, contendo apenas versões estáveis e publicáveis.
develop, usada para integração contínua do desenvolvimento.
feature/, uma branch isolada para cada funcionalidade nova, criada a partir da develop e integrada de volta por pull request.

As mensagens de commit seguem o padrão Conventional Commits (prefixos como feat, fix e docs), e as entregas relevantes são marcadas com tags de versionamento semântico, seguindo o formato MAJOR.MINOR.PATCH, como em v1.0.0.

## Autor

Lucas Augusto Araujo da Silva
Projeto desenvolvido para a disciplina de Desenvolvimento Front-End.
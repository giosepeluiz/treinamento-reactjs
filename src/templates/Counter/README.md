## COUNTER

Este é um projeto geral que engloba tudo o que foi aprendido até então, o passo a passo está neste documento.

### userContext()

 Primeiramente criamos uma pasta de contextos, que no caso será `CounterContext`, dentro dela criamos alguns arquivos que conterão os contextos específicos (cada aquivo está comentado):

- Criamos o contexto em si `index.jsx`, definindo os **PropTypes** e o **ContextProvider**;
- Em um outro arquivo definimos as ações que executaremos;
- Também criamos um arquivo com todos os estados iniciais.

### userReducer()

Depois de criar o contexto, vamos preparar a aplicação para receber o `useReducer()`:

- Primeiro criamos, dentro da pasta `CounterContext`, um arquivo chamado `reducer.js`;

- Em seguida criaremos um arquivo chamado `build-actions.js`, onde criaremos uma factory de objetos;

> **NOTA:** Sempre que um arquivo tiver o nome de build, make ou create, trata-se de uma factory, onde criaremos um objeto.

- Agora criaremos o componente de `Button`, a qual será responsável pela inserção de um botão no frontend;

- Em seguida criamos um componente chamado `Heading`, para receber o <h1> com o contador;

> **NOTA:** No Heading chamamos o contexto dentro do arquivo principal, mas é possível mandar propriedades pelo componente principal através das childrens. A mesma coisa acontece com Button, mas nele enviamos propriedades pelo componente.

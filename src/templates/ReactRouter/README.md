## ROTAS EM REACT

O React não vem com roteamento nativo, pois ele é focado na interface de usuário, contudo é possível resolver isso através do pacote React Router. O processo de instalação e utilização é muito simples.

- Primeiro devemos instalar o pacote com `yarn add react-router-dom` ou `npm install react-router-dom`;
- Depois importamos no arquivo principal `App` os pacotes `{ BrowserRouter, Route, Switch, Link }`, onde:
- - **`BrowserRouter`** é um tipo de invólucro (provider) para a aplicação, que permite que as rotas sejam feitas;
- - **`Route`** define quais serão as rotas, colocadas dentro de componentes;
- - **`Switch`** define o grupo de rotas a serem acessados pelo menu;
-  - **`Link`** é cada item do menu, onde deve estar dentro do `Switch`.

> **NOTA:** é interessante que as rotas estejam dentro de pastas próprias em `templates` ou `pages` e o menu esteja num componente próprio chamado `Menu`.

**Leia mais:** [React Router: Declarative Routing for React.js](https://reactrouter.com/web/guides/quick-start)
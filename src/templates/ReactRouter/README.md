## ROTAS EM REACT

O React não vem com roteamento nativo, pois ele é focado na interface de usuário, contudo é possível resolver isso através do pacote React Router. O processo de instalação e utilização é muito simples.

- Primeiro devemos instalar o pacote com `yarn add react-router-dom` ou `npm install react-router-dom`;
- Depois importamos no arquivo principal `App` os pacotes `{ BrowserRouter, Route, Switch, Link }`, onde:
- - **`BrowserRouter`** é um tipo de invólucro (provider) para a aplicação, que permite que as rotas sejam feitas;
- - **`Route`** define quais serão as rotas, colocadas dentro de componentes;
- - **`Switch`** define o grupo de rotas a serem acessados pelo menu, ele garante que sómente uma rota será acessada (via match com o link);
-  - **`Link`** é cada item do menu, onde deve estar dentro do `Switch`.

> **NOTA:** é interessante que as rotas estejam dentro de pastas próprias em `templates` ou `pages` e o menu esteja num componente próprio chamado `Menu`.

### Rotas com ID dinâmico

É possível criar rotas com slug ou ID, para isso basta usar `/:slug?` ou `:id?`, por exemplo. Onde o os **dois pontos** identificam que se trata de uma rota dinâmica e o **interrogação** diz que se trata de uma rota opcional. Se não tiver a interrogação, a rota não será acessada, nem mesmo aquela definida como estática.

Já no componente roteado, podemos acessar os parâmetros importando o `{ useParams } from 'react-router-dom'` e utilizando o hook `useParams()`

** **
> **NOTA:** o termo `exact` faz com que aquela rota só seja acessada com 100% de precisão em relação á URL. Caso não coloque `exact`, é importante que coloque a rota mais específica acima das demais por conta da ordem de match, por exemplo:

```
<Route path="/page/:slug/:id" component={Page} />
<Route path="/page/:slug" component={Page} />
<Route path="/page/" component={Page} />
```

Que é o mesmo que `<Route path="/page/:slug?/:id?" component={Page} />`
** **
**React Router:** [React Router: Declarative Routing for React.js](https://reactrouter.com/web/guides/quick-start)

**Hook Params:** [React Router: URL Params](https://reactrouter.com/web/example/url-params)
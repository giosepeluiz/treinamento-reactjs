## React Context API

**Explicação:** React Context serve basicamente para armazenar globalmente as props na função, para que não seja necessário passar de pai para filho, assim por diante. Ela tem uma função similar ao Redux embora cada um possa ser usado num contexto específico.

**Meus passos utilizados para memorizar o uso de React Context nesta aplicação:**

- Criar uma pasta relativa aos `./components`;
- Criar uma pasta relativa aos `./providers`;
- Criar um arquivo chamado `./providers/auth.js` (explicação comentada);
- Importar **`<AuthProvider>`** no `./index.js` como invólucro dos demais itens (explicação comentada);
- Importar **`{ AuthContext }`** dentro do `useContext()` nos componentes que for utilizar as variáveis globais, como no `UserName.jsx`, no `GameListChange.jsx` e no `App.jsx`.

> As demais informações necessárias estão comentadas em cada arquivo. Ainda não está nada otimizado, pois se trata de um estudo apenas.

## React Hooks - Context / Reduce

**Explicação:** React Context e Reduce, juntos, servem basicamente para armazenar globalmente as props na função, para que não seja necessário passar de pai para filho, assim por diante. Ela tem uma função similar ao Redux embora cada um possa ser usado num contexto específico.

React Context é uma alternativa ao setState() e ao useState(), enquanto que o Reducer é uma alternativa ao Redux.

**Meus passos utilizados para memorizar o uso de React Context nesta aplicação:**


### CONTEXT

Antes de mais nada, vamos criar um contexto global, para armazenar as informações que queremos.

- No componente principal, importamos `{  createContext  }` a partir do `react`;
- Criamos o contexto global usando `export const CountContext = createContext()` (antes e fora da aplicação principal);

Depois de criar o contexto global com um nome qualquer, devemos prover esse contexto aos filhos da aplicação principal (`App.js`), envolvendo-os, para que eles "entendam" de ondem devem tirar a informação, utilizando a seguinte metodologia:

```
<CountContext.Provider value={3}>
ㅤㅤ<Child />
ㅤㅤ<Child />
</CountContext.Provider>
```
> No Exemplo acima, o `value={3}` é apenas para exemplificar como os valores podem ser passados pelas propriedades. Todos os filhos e netos do componente principal terão acesso a ele. No lugar dessa propriedade pode ser um valor fixo (como no exemplo), um objeto, uma função, um vetor etc.

Para utilizar nos filhos o contexto criado, devemos fazer algumas importações em cada um deles:

- Primeiro importamos a biblioteca `{  useContext  }` a partir do `react`;
- Em seguida importamos o contexto criado no componente pai `{ CountContext }`;
- Por fim, dentro ds aplicação, criamos uma constante com `useContext(CountContext)`, onde dependendo da situação, pode ser necessário desestruturar;

> **DICA:** Caso utilize, por exemplo, `[value, setValue()] = useState()` no componente pai, ao utilizar nos filhos o `setValue()` para modificar o valor, não se faz necessário desestruturar e importar o `value`, basta utilizar o recurso `PreviousState` (que também funciona com useReducer). Por exemplo:

```
<button onClick={() => {
ㅤㅤsetCount((previousState) => {
ㅤㅤㅤㅤpreviousState + 1;
ㅤㅤ})
}}>Increment</button>

```


### REDUCER

Normalmente utilizamos `useState()` para gerenciar informações e dados em componentes, mas num projeto mais complexo, gerenciar com `useState()` fica inviável, para contornar isso nasceu o `useReducer()`. Este recurso deixa o `createContext()` muito próximo do que é o React Redux.

- Primeiro importamos o `useReducer()`, substituindo o `useState()`, caso exista;
- Dentro da aplicação principal, criamos uma constante recebendo uma função contendo o estado anterior (state) e a ação a ser executada (dispatch), por exemplo:

```
const countReducer = (state, dispatch) => {
ㅤㅤswitch(dispatch){
ㅤㅤㅤㅤcase 'INCREMENT':
ㅤㅤㅤㅤㅤㅤreturn state + 1;
ㅤㅤㅤㅤbreak;
ㅤㅤㅤㅤcase 'DECREMENT':
ㅤㅤㅤㅤㅤㅤreturn state - 1;
ㅤㅤㅤㅤbreak;
ㅤㅤㅤㅤdefault:
ㅤㅤㅤㅤㅤㅤreturn state;
ㅤㅤ}
}
```

- Em seguida criamos uma variável que vai receber um valor inicial, por exemplo, `const countInitialValue = 0`;
- Assim como no `useState()`, criaremos uma constante que receberá a variável e alterará seu valor, por exemplo:

```
const [count, setCount] = useReducer(countReducer, countInicialValue);
```

> **IMPORTANTE:** No exemplo acima, o `setCount`, utilizando `useReducer()` **não executa** da mesma forma que executaria utilizando o `useState()` pelo fato de que, no exemplo, ele chama a função `countReducer` que incrementa ou decrementa um valor.


Para utilizar nos filhos isso que criamos até agora, basta fazer a importação da função como faríamos no `setState()`, por exemplo:

```
<button onClick={() => setCount('INCREMENT')}>Increment</button>
<button onClick={() => setCount('DECREMENT')}>Decrement</button>
```

O código está comentado para ajudar na compreensão.

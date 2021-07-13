## CODE SPLITTING / LAZY COMPONENTS

A maioria das aplicações React serão "empacotadas" usando ferramentas como **Webpack**, **Rollup** ou **Browserify**. Empacotamento (Bundling) é o processo onde vários arquivos importados são unidos em um único arquivo: um "pacote" (bundle). Este pacote pode ser incluído em uma página web para carregar uma aplicação toda de uma vez.

Empacotamento é excelente, mas à medida que sua aplicação cresce, seu pacote crescerá também. Especialmente se você estiver usando grandes bibliotecas de terceiros. Você precisa ficar de olho em todo código que está incluindo no seu pacote, pois assim você evitará que o mesmo fique tão grande que faça sua aplicação levar um tempo maior para carregar.

Para evitar acabar com um pacote grande, é bom se antecipar ao problema e começar a “dividir” seu pacote. A divisão de código é um recurso suportado por empacotadores como Webpack, Rollup e Browserify (através de coeficiente de empacotamento (factor-bundle)) no qual pode-se criar múltiplos pacotes que podem ser carregados dinamicamente em tempo de execução.

Dividir o código de sua aplicação pode te ajudar a carregar somente o necessário ao usuário, o que pode melhorar dramaticamente o desempenho de sua aplicação. Embora você não tenha reduzido a quantidade total de código de sua aplicação, você evitou carregar código que o usuário talvez nunca precise e reduziu o código inicial necessário durante o carregamento.


> **⚠️ IMPORTANTE:** Somente use o code splitting se sua aplicação ficar muito pesada, na refatoração, para eliminar um pouco do peso todo. Jamais comece a aplicação já usando o code splitting, pois o Create React já vem otimizado por padrão.


Mais informações: [Dividindo o Código (Code-Splitting) – React (reactjs.org)](https://pt-br.reactjs.org/docs/code-splitting.html)
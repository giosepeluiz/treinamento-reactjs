## ORGANIZAÇÃO DE PASTAS E ARQUIVOS

Uma aplicação bem estruturada precisa ter uma boa organização de pastas e arquivos. A organização apresentada neste conteúdo tratasse de uma organização criada por **Luiz Miranda,** porém cada desenvolvedor pode organizar à sua maneira.

### Estruturação de Pastas

Dentro da pasta da `src` da aplicação, criamos uma árvore de pastas com o seguinte conteúdo:

- `components`: responsável por armazenar os componentes da aplicação;
- `contexts`: contém os contextos e reducers da aplicação;
- `templates`: armazena os templates da aplicação;

**Dentro da pasta CONTEXTS:**

A pasta `contexts` vai conter os provedores de contextos, para isso criamos uma pasta principal, onde no nosso exemplo de chama `PostsProviders`, e dentro dela tem:

- `actions.js`: onde serão armazenadas as ações;
- `context.js`: onde serão armazenados os contextos;
- `data.js`: onde colocaremos os dados iniciais dos contextos, como as constantes com estados;
- `index.jsx`: como arquivo principal;
- `reducer.js`: conterá os redutores;
- `types.js`: colocaremos os tipos das ações.

Item por item é explicado em cada um dos arquivos em forma de comentários.
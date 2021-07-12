## ERROR BOUNDARIES

No passado, **erros de JavaScript** dentro de componentes costumavam corromper o estado interno do React e fazê-lo emitir erros incompreensíveis nas próximas renderizações. Estes erros eram causados por um erro anterior no código da aplicação, mas o React não fornecia um meio para tratá-los de forma graciosa nos componentes e não conseguia se recuperar deles.

Agora com o **Error Boundaries** é possível gerenciar os erros sem quebrar toda a aplicação, mostrando para o usuário que houve um erro ou simplesmente jogá-lo num log de erros.

Mais informações: [Error Boundaries – React (reactjs.org)](https://pt-br.reactjs.org/docs/error-boundaries.html)
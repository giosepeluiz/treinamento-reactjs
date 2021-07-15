import React, { useEffect } from 'react';
import { useCounterContext } from '../CounterContext';

//¡ Componente Home
const Home = () => {
    //¿ Importação do estado e das ações de Context
    const [state, actions] = useCounterContext();


    //# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
    //# Embora o nosso action.increase() seja chamado corretamente em
    //# onClick={() => actions.increase()}, ele não funcionaria corretamente
    //# em caso de useEffect(), como no exemplo abaixo. Isso porque o useEffect()
    //# faz uma nova renderização cada vez que a ação ou variável mudar, a
    //# a questão é que o 'actions' gera um objeto, e objetos são sempre diferentes
    //# dentro do JS, mesmo que visualmente eles sejam iguais, logo, o useEffect()
    //# entende que ele sempre muda, gerando novas renderizações e loop infinito.
    //#
    //# Esse problema podemos resolver com useState() aqui nesse mesmo aquivo, mas
    //# isso jogaria mais complexidade para o frontend, embora fosse uma boa solução.
    //# No caso resolveremos com useRef(), lá no nosso Context, para dar uma estabilidade
    //# ao 'actions'.
    //# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

    useEffect(() => {
        actions.increase();
    }, [actions])


    return (
        <div>
            <h1 >Hello World!</h1>
        </div>
    );
};

export default Home;
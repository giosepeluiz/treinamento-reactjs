//¿ Importação dos recursos necessários
import P from 'prop-types';
import { Context } from './context';
import React, { useContext, useReducer, useRef } from 'react';
import { initialCounterState } from './states';
import { buildActions } from './build-actions';
import { reducer } from './reducer';

//¿ Criação do Context Provider para exportar
export const CounterContextProvider = ({ children }) => {
    //const [state, dispatch] = useState(initialCounterState);
    const [state, dispatch] = useReducer(reducer, initialCounterState);

    //# Antes de usar o useRef, após o problema com o useEffect.
    //const actions = buildActions(dispatch);
    //# Ao usar o useRef() não podemos esquecer de adicionar o '.current' ao chamar a ação
    const actions = useRef(buildActions(dispatch));

    return <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>;
}; 

//¿ Proptypes, necessárias pelo eslint
CounterContextProvider.propTypes = {
    children: P.node.isRequired,
};

//¿ Hook personalizado para a utilização do Context
export const useCounterContext = () => {
    const context = useContext(Context);

    //¡ Mostra pro desenvolvedor que tem um erro de uso do hook
    if(typeof context === 'undefined'){
        throw new Error('You have to use useCounterContext inside <CounterContextProvider />')
    }

    return [...context];
}
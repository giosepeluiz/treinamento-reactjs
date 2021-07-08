import React, { createContext, useReducer } from 'react';
import States from './States';
import Cities from './Cities';
import './styles.css';

//¿ Cria um contexto inicial
export const StateContext = createContext();

//¿ Reducer que preenche as informações no estado incial do componente
const BrazilianCities = () => {
    const stateReducer = (state, action) => {
        switch (action.type) {
          case 'SELECTED':
            return {...state, stateID: action.payload[0], stateName: action.payload[1]};
          default:
            return state;
        }
    };

    //¡ Estado inicial do componente
    const stateInicialValue = {
        stateID: 0,
        stateName: ''
    };
    const [state, setState] = useReducer(stateReducer, stateInicialValue);


    return(
        <StateContext.Provider value={{ state, setState }}>
        <div className="wrapper">
            <div className="states"><States /></div>
            <div className="cities"><Cities /></div>
        </div>
        </StateContext.Provider>
    )
}


export default BrazilianCities;
import React, { createContext, useReducer } from 'react';
import States from './States';
import Cities from './Cities';
import './styles.css';

export const StateContext = createContext();

const BrazilianCities = () => {
    const stateReducer = (state, action) => {
        switch (action.type) {
          case 'SELECTED':
            return action.payload;
          default:
            return state;
        }
    };

    const stateInicialValue = 0;
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
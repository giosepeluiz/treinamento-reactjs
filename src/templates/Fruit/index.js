import React, { createContext, useReducer } from 'react';
import Items from './components/Items.jsx';
import './style.css';

export const FruitsContext = createContext();

const Fruit = () => {
  //¡ Função que vai definir o que o "setFruit" fará, sendo:
  //¿ state = o estado anterior/inicial do "fruit"
  //¿ dispatch = a ação que tomaremos com o "setFruit" (pode conter um dispatch.type)
  const fruitReducer = (state, dispatch) => {
    switch (dispatch.type) {
      case 'ADD':
        return { ...state, row: [...state.row, dispatch.newItem] };
      case 'DEL':
        console.log('BEFORE', state.row);
        let newState = state.row.filter((item, index) => index !== dispatch.index);
        console.log('AFTER', newState);
        return { ...state, row: newState };
      default:
        return { ...state };
    }
  };

  //¡ Valor Inicial do estado
  const initialValue = {
    names: ['🍌', '🍈', '🍊', '🍇'],
    row: [],
  };

  //¡ Importação do useReducer()
  const [fruit, setFruit] = useReducer(fruitReducer, initialValue);

  //¡ "FruitsContext.Provider" define que todos os filhos terão acesso ao contúdo do estado inicial
  return (
    <div>
      <FruitsContext.Provider value={{ fruit, setFruit }}>
        <Items />
      </FruitsContext.Provider>
    </div>
  );
};

export default Fruit;

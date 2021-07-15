import * as actionTypes from './action-types';

//¡ Agora criaremos um objeto com as funções a serem utilizadas
//¡ com os sction types dentro da aplicação
export const buildActions = (dispatch) => {
  return {
    increase: () => dispatch({ type: actionTypes.INCREASE }),
  };
};



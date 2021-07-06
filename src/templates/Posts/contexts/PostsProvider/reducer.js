import * as types from './types';

//¿ Nunca deixar de apagar os console.log() quando for para produção

export const reducer = (state, action) => {
  switch (action.type) {
    //¡ Após o carregamento com sucesso
    case types.POSTS_SUCCESS:
      console.log(action.type);
      return { ...state, posts: action.payload, loading: false };
    //¡ Durante o carregamento
    case types.POSTS_LOADING:
      console.log(action.type);
      return { ...state, loading: true };
    //¡ Caso não seja alternativas anteriores
    default:
      console.log('NÃO ENCONTREI A ACTION TYPE');
      return { ...state };
  }
};

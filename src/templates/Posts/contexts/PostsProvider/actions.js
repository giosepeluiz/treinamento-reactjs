import * as types from './types';

//¿ Este arquivo armazena as ações no Reducer, no nosso exemplo trata-se do
//¿ fetch() a qual fará importação dos posts.

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POSTS_LOADING });

  setTimeout(async () => {
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await postsRaw.json();
    dispatch({ type: types.POSTS_SUCCESS, payload: response });
  }, 5000);
};

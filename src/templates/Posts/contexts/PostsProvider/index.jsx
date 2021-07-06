import { data } from './data';
import { PostsContext } from './context';
import { reducer } from './reducer';
import P from 'prop-types';
import React, { useReducer } from 'react';

export const PostsProvider = ({ children }) => {
    const [postsState, postsDispatch] = useReducer(reducer, data);

    return(
        <PostsContext.Provider value={{ postsState, postsDispatch }}>
            {children}
        </PostsContext.Provider>
    )
}

PostsProvider.protoTypes = {
    children: P.node.isRequired,
}
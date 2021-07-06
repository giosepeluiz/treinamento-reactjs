import React from 'react';
import { Posts } from './components/Posts';
import { PostsProvider } from './contexts/PostsProvider';

const BrazilianCities = () => {

    return(
        <PostsProvider>
           <Posts />
        </PostsProvider>
    )
}

export default BrazilianCities;

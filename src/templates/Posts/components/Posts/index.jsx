import React, { useContext, useEffect } from "react";
import { PostsContext } from './../../contexts/PostsProvider/context';
import { loadPosts } from './../../contexts/PostsProvider/actions';

export const Posts = () => {

    const postsContext = useContext(PostsContext);
    const { postsState, postsDispatch } = postsContext;

    useEffect(() => {
        loadPosts(postsDispatch)
    }, [postsDispatch])

    console.log(postsState)
    return (
        <div>
            {postsState.loading && (
                <p>
                    <strong>Carregando posts...</strong>
                </p>
            )}
            {postsState.posts.map(p => {
                return <p key={p.id}>{p.title}</p>
            })}
        </div>
    );
};
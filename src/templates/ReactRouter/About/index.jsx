import React from 'react';
import { useParams } from 'react-router-dom';

export const About = () => {
    //const params = useParams;
    const { slug, id } = useParams();

    return (
        <div className='page-about'>
            Sobre
            <p className='slug'>{slug ? `Slug: ${slug}` : ``}
            <br />{id ? `ID: ${id}` : ``}</p>
        </div>
    );
};

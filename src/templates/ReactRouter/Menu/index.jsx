import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
    return (
        <nav>
            <uL>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </uL>
        </nav>
    );
};

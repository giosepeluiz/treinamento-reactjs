import React, { lazy, Suspense, useState } from 'react';
//import LazyComponent from './LazyComponent';
import './style.min.css'

//¡ Um carregamento padrão por LazyComponent, utiliza-se como na linha abaixo
// const LazyComponent = lazy(() => import('./LazyComponent'));

//¿ Contudo, para facilitar visualmente para o usuário, no nosso exemplo,
//¿ é possível pré-carregar o componente ao passar o mouse
const loadComponent = () => import('./LazyComponent');
const LazyComponent = lazy((loadComponent));

const CodeSplitting = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="wrapper">
            <button onMouseOver={loadComponent} onClick={() => setShow((s) => !s)}>{show ? 'Componente LIGADO' : 'Componente DESLIGADO'}</button>
            <div className='lorem-text'>
                <Suspense fallback="Carregando...">
                    {show && <LazyComponent />}
                </Suspense>
            </div>
        </div>
    );
};

export default CodeSplitting;
import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from './index';

const States = () => {

    //¿ Cria um estado temporário para mostrar qual foi o item clicado pelo usuário
    const [stateValue, setStateValue] = useState([])

    //¿ Traz do componente pai o contexto global
    const { setState } = useContext(StateContext);

    //¿ API que importa os estados brasileiros
    //¡ IMPORTANTE: numa refatoração existe a possibilidade de usar uma
    //¡ mesma função para as cidades e estados brasileiros no componente pai
    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json');
        const data = await response.json();
        setStateValue(data);
    }, []);

    //¿ Função que envia para o reducer, a informação de qual o estado brasileiro
    //¿ clicado, onde será inserido no estado global
    const handleSelected = (id, name) =>{
        setState({ type: 'SELECTED', payload: [Number(id), name] })
    }

    return (
        <div>
            <strong>Clique em algum estado:</strong>
            <ul>
            {stateValue.map((state) => {
                return <li onClick={() => handleSelected(state.ID, state.Nome)} key={state.ID}>{state.Nome}</li>
            })}
            </ul>
        </div>
        );
};

export default States;
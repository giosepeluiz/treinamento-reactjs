import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from './index';

const States = () => {

    const [stateValue, setStateValue] = useState([])
    const { setState } = useContext(StateContext);

    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json');
        const data = await response.json();
        setStateValue(data);
    }, []);

    const handleSelected = (value) =>{
        setState({ type: 'SELECTED', payload: Number(value) })
    }

    return (
        <div>
            <strong>Clique em algum estado:</strong>
            <ul>
            {stateValue.map((state) => {
                return <li onClick={() => handleSelected(state.ID)} key={state.ID}>{state.Nome}</li>
            })}
            </ul>
        </div>
        );
};

export default States;
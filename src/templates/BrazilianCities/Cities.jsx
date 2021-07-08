import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from './index';

const Cities = () => {
    //¿ Cria um estado temporário para mostrar qual foi o item clicado pelo usuário
    const [cityValue, setCityValue] = useState([])

    //¿ Traz do componente pai o contexto global
    const { state } = useContext(StateContext);

    //¿ API que importa as cidades brasileiras
    //¡ IMPORTANTE: numa refatoração existe a possibilidade de usar uma
    //¡ mesma função para as cidades e estados brasileiros no componente pai
    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json');
        const data = await response.json();
        setCityValue(data);
    }, []);

    //¿ Filtra as cidades brasileiras baseado no estado brasileiro selecionado
    const filteredCities = cityValue.filter(city => Number(city.Estado) === state.stateID);

    return (
        <div>
            {state.stateID ? `O estado ${state.stateName} possui ${filteredCities.length} cidades.` : `Nenhum estado selecionado...`}
            <br />
            {state.stateID ? <select>${filteredCities.map((city) => <option key={city.ID}>{city.Nome}</option>)}</select> : ''}
        </div>
    );
};

export default Cities;
import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from './index';

const Cities = () => {
    const [cityValue, setCityValue] = useState([])
    const { state } = useContext(StateContext);

    useEffect(async () => {
        const response = await fetch('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Cidades.json');
        const data = await response.json();
        setCityValue(data);
    }, []);

    const filteredCities = cityValue.filter(city => Number(city.Estado) === state );

    return (
        <div>
            {state ? `O estado possui ${filteredCities.length} cidades.` : `Nenhum estado selecionado...`}
            <ul>
            {filteredCities.map((city) => {
                return <li key={city.ID}>{city.Nome}</li>
            })}
            </ul>
        </div>
    );
};

export default Cities;
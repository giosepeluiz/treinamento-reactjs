import P from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import './style.css';

/*
 *
 *  useRef() atribui uma referência a um elemento da DOM
 *
 */


//! - - - - - - - - - - - - -
//! COMPONENTE LISTA DE PAÍSES
//! - - - - - - - - - - - - -

const CountriesList = ({ countries, handleClick }) => {
  return (
    countries.map((country, index) => {
        let { nome_pais, gentilico } = country;
        return(
            <li key={index} onClick={() => handleClick(nome_pais)}>
                <b>{nome_pais}</b> ({gentilico})
            </li>
        )
    })
  );
};


//# - - - - - - - - - - - - -
//# Definindo as propriedades dos "props" importados em <CountriesList />
//# - - - - - - - - - - - - -

CountriesList.propTypes = {
    countries: P.array.isRequired,
    handleClick: P.func,
};

//! - - - - - - - - - - - - -
//! COMPONENTE PRINCIPAL
//! - - - - - - - - - - - - -

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');
    const input = useRef(null); // Referencia o input de classe "input-text"
    const counter = useRef(0); // Referencia um contador de renderização

    useEffect(() => {
    fetch('https://gist.githubusercontent.com/jonasruth/61bde1fcf0893bd35eea/raw/10ce80ddeec6b893b514c3537985072bbe9bb265/paises-gentilicos-google-maps.json')
      .then((res) => res.json())
      .then((res) => setCountries(res));
    }, []);

    useEffect(()=>{
        input.current.focus() // Dá foco ao input após renderizar
        counter.current++; // Incrementa ao contador cada vez que renderiza
    })

    const handleClick = (value) => {
        setValue(value);
    }

  return(
    <div>
        <input type="text" ref={input} className="input-text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Clique em um país"/>
        <br /><small>Renderizou {counter.current}x</small>
        <ul>
            <CountriesList countries={countries} handleClick={handleClick} />
        </ul>
    </div>
  )

}

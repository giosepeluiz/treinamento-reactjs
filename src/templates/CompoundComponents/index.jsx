import React, { Children, cloneElement, useState } from 'react';

// Images
import lightOn from './img/light-on.png';
import lightOff from './img/light-off.png';
import buttonOn from './img/button-on.png';
import buttonOff from './img/button-off.png';

// Style
import './style.css';

//¿ Componente pai que receberá os filhos
const LightMaster = ({children}) => {
    //¡ Gera um estado inciial para o nosso exemplo
    const [lightNumber, setLightNumber] = useState(1);
    const setNumber = () => setLightNumber(lightNumber + 1);

    //¡ Map() que retorna as novas propriedades para os filhos
    return (Children.map(children, child => {
        const newChild = cloneElement(child, {
            //! Itens passados como propriedades para os filhos
            lightNumber,  // Número de cliques no elemento
            setNumber     // Incrementa o número de cliques no elemento
        })
        return newChild;
    }))
} 

//¿ Componente filho
const Light  = ({ lightNumber, setNumber, ...props }) => {
    const [light, setLight] = useState(lightOff);
    const [button, setButton] = useState(buttonOff);

    const changeLight = () => {
        switch(light) {
            case lightOff:
                setLight(lightOn);
                setButton(buttonOn);
                setNumber();
                // CONSOLE LOG
                console.log(`LUZ ${props.value} DESLIGADA`);
                console.log(`-- Interruptores clicados ${lightNumber} vezes no total.`);
            break;
            case lightOn:
                setLight(lightOff);
                setButton(buttonOff);
                setNumber();
                // CONSOLE LOG
                console.log(`LUZ ${props.value} LIGADA`);
                console.log(`-- Interruptores clicados ${lightNumber} vezes no total.`);
            break;
            default:
                setLight(light)
                setButton(button);
        }
    }

    return (
        <div className="wrap">
            <img className="light" src={light} alt="" />
            <img className="button" src={button} alt="" onClick={() => changeLight()} />
        </div>
    );

}

const CompoundComponents = () => {
    return (
        <LightMaster>
            <Light value={1} />
            <Light value={2} />
            <Light value={3} />
            <Light value={4} />
            <Light value={5} />
            <Light value={6} />
        </LightMaster>
    );
};

export default CompoundComponents;
import React, { Children, cloneElement, useState } from 'react';

// Images
import lightOn from './img/light-on.png';
import lightOff from './img/light-off.png';
import buttonOn from './img/button-on.png';
import buttonOff from './img/button-off.png';

// Style
import './style.min.css';

//¿ Componente pai que receberá os filhos
const LightMaster = ({children}) => {

    //¡ Gera um estado inciial para o nosso exemplo
    const [lightNumber, setLightNumber] = useState(1);
    const setNumber = () => setLightNumber(lightNumber + 1);

    //¡ Map() que retorna as novas propriedades para os filhos
    return (Children.map(children, child => {

        //! Ignora tags que não sejam componentes
        //! Para tags com child como <div></div> precisa usar Context também
        if(typeof child.type === 'string') {
            return child;
        }

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
                // CONSOLE LOG
                console.log(`%cLUZ ${props.value} LIGADA`, "color:lightgreen");
            break;
            case lightOn:
                setLight(lightOff);
                setButton(buttonOff);
                // CONSOLE LOG
                console.log(`%cLUZ ${props.value} DESLIGADA`, "color:orange");
            break;
            default:
                setLight(light)
                setButton(button);
        }

        setNumber();

        // CONSOLE LOG
        console.log(`-- Interruptores clicados ${lightNumber} vezes no total.`);
    }

    return (
        <div className="item">
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

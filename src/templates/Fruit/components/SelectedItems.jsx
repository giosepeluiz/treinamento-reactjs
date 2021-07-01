import React, { useContext  } from 'react';
//¡ Importação do contexto da aplicação principal
import { FruitsContext } from '../index';

import '../style.css';

const Items = () => {
    const { fruit, setFruit } = useContext(FruitsContext);

    //¿ O map() abaixo faz com que cada item no vetor "fruit.row" seja listado
    return (
        <div>
            <b>Itens clicados <span style={{fontSize: "15px"}}>(clique para deletar)</span></b> <br/>
            { fruit.row.map((items, index) => {
                return <span key={index} onClick={() =>  setFruit({type: 'DEL', index: index})}>{items}</span>
            })}
        </div>
    )
}

export default Items;

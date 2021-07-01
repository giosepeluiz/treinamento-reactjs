import React, { useContext  } from 'react';
//¡ Importação do contexto da aplicação principal
import { FruitsContext } from '../index';
//¡ Importação da aplicação filha
import SelectedItems from './SelectedItems';

import '../style.css';

const Items = () => {

    //¡ Inserção das props vindas da aplicação principal
    const { fruit, setFruit } = useContext(FruitsContext);

    //¿ O map() abaixo faz com que cada item no vetor "fruit.names" seja listado
    return (
        <div>
            <b>Itens clicáveis</b> <br/>
            { fruit.names.map((items, index) => {
                return <span key={index} onClick={(e) => setFruit({type: 'ADD', newItem: items}) }>{items}</span>
            })}
            <p />

            <SelectedItems />
        </div>
    )
}

export default Items;

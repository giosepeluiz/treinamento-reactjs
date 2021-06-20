import React, { useContext, createContext } from 'react';
import Panel from './Panel';
import List from './List';
import './style.scss';

//! - - - - - - - - - - - - -
//! Cria uma variável de estado inicial
//! - - - - - - - - - - - - -

const globalState = {
    gameList: ["Assassin's Creed Valhalla", "Far Cry 6", "Grand Theft Auto 5"],
    counter: 0
}

//! - - - - - - - - - - - - -
//! Cria uma variável de contexto inicial
//! - - - - - - - - - - - - -
const GlobalContext = createContext()

const GameName = () => {
    const context = useContext(GlobalContext);
    return <div>{context.counter}</div>;
}


export default function GameList(){
    return(

        //# - - - - - - - - - - - - -
        //# Elemento que provê a possibilidade de acessar uma
        //# variável ou componente a partir do que estiver na raiz
        //# - - - - - - - - - - - - -
        <GlobalContext.Provider value={{ counter: 0 }}>
            <List />
            <Panel />
        </GlobalContext.Provider>

    )
}

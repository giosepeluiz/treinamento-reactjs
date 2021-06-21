import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/auth';
import '../style.css'

const GameListChange = () => {
    const { user, setUser } = useContext(AuthContext);
    const [newGame, setNewGame] = useState('')

    //¡ Input de jogos altera no onClick ao clicar em 'Inserir'

    //! Insere um novo jogo temporariamente na variável 'newGame'
    const handleNewGame = (e) => {
        setNewGame(e.target.value);
    }

    //! Ao clicar no botão 'Inserir', dá um push na lista de jogos em 'user'
    const addNewGame = () => {
        //? Envia o item em 'newGame' para o context 'user' se não estiver vazio
        if (newGame !== '') setUser({...user, games: [...user.games, newGame]});

        //? Limpa o input de texto ao submeter um novo item.
        setNewGame('');
    }

    return(
        <div>

            <input onChange={(e) => handleNewGame(e)} type="text" placeholder="Digite um novo jogo" value={newGame}/>
            <input onClick={() => addNewGame()} type="button" value="Inserir" />

        </div>
    )
}

export default GameListChange;

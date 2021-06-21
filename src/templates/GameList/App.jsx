import React, { useContext } from 'react';
import { AuthContext } from './providers/auth';
import UserName from './components/UserName'
import GameListChange from './components/GameListChange'

const App = () => {

    //! Importação do AuthContext de './providers/auth'.
    const { user, setUser } = useContext(AuthContext);

    //¡ Remove um item da lista de jogos ao clicar.
    const handleRemoveGame = (index) => {

        //! Remove um item da lista de jogos ao clicar, onde 'index' é o item recebido pelo map.
        user.games.splice(index, 1);

        //! Força a re-renderização do componente de lista de jogos.
        setUser({...user});
    }

    return(

        <div>
        <b>Jogos de {user.name}:</b>
        <ul>
            {user.games.map((game, index) => (
                <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>
            ))}
        </ul>


        <UserName />
        <GameListChange />
        </div>
    )
}

export default App;

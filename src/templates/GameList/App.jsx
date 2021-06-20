import React, { useContext } from 'react';
import { AuthContext } from './providers/auth';

const App = () => {

    //! Importação do AuthContext de './providers/auth'
    const { user, setUser } = useContext(AuthContext);


    return(
        <div>
            <b>Jogos de {user.name}:</b>
            <ul>
                {user.games.map((game, index) => (
                    <li key={index}>{game}</li>
                ))}
            </ul>

            <input onChange={(e) => setUser({...user, name: e.target.value})} />

        </div>
    )

}

export default App;

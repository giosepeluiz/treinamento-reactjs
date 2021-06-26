import React, { useContext } from 'react';
import { AuthContext } from '../providers/auth';
import '../style.css'

const UserName = () => {
    const { user, setUser } = useContext(AuthContext);

    //¡ Input de nome altera no onChange e não ao clicar em 'Inserir'

    return(
        <div>
            <input onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Digite um novo nome" />
        </div>
    )
}

export default UserName;

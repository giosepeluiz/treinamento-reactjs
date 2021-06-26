import React, { createContext, useState } from 'react';

//! Definir o contexto a ser utilizado.
export const AuthContext = createContext({});

//! Criar um provedor global de dados, como de tema ou idioma, por exemplo.
const AuthProvider = (props) => {
  //
  //! Alterar os dados com useState. Essas informações são um template,
  //! pois podem ser vazias numa situação de produção.
  const [user, setUser] = useState({
    name: 'Giosepe Luiz',
    games: ["Assassin's Creed Valhalla", "Far Cry 6", "Red Dead Redemption 2"],
  });

  //! Retorna o provedor como 'children' para o restante da aplicação,
  //! isso é necessário para o componente principal que os filhos dele
  //! receberão informações de um provedor global de dados.
  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;

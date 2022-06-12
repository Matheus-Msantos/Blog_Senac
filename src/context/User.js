import React, { createContext, useState } from "react";

// Criando contexto do usuário
export const UserContext = createContext();

function UserAuthContext({ children }) {
  const [currentUser, setCurrentUser] = useState();

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserAuthContext;
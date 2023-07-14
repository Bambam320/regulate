import React, { useState, useEffect } from 'react';

function UserProvider({ children }) {
  const UserContext = React.createContext();

  function onLogin () {
    console.log('login from context')
  }

  return (
    <UserContext.Provider
      value={{
        onLogin
      }}
    >
      {children}
    </UserContext.Provider>
  );
  
};

export { UserContext, UserProvider}
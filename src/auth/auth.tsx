import React, { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}
export const AuthContext = createContext<{
  ready: boolean;
}>({
  ready: false,
});

export const AuthProvider = (props: Props) => {
  const [ready, setReady] = useState(false);
  return (
    <AuthContext.Provider value={{ready}}>{props.children}</AuthContext.Provider>
  );
};

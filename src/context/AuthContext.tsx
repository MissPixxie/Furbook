import React, { createContext, useState } from "react";
import { useReducer } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UsersModel from "../../Server/models/UsersModel";

interface Props {
  children: React.ReactNode;
}

interface Context {
  state: State;
  setState: (state: State) => void;
}

interface State {
  user: string;
  isLoggedIn: boolean;
}

// interface User {
//   userID: string;
//   userName: string;
// }

export const AuthContext = createContext<Context>({
  state: { user: "", isLoggedIn: false },
  setState: (state) => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [state, setState] = useState<State>({
    user: "",
    isLoggedIn: false,
  });

  
  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{ state, setState }}>
        {children}
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

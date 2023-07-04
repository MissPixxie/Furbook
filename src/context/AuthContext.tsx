import React, { createContext, useState } from "react";
import { useReducer } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

interface Context {
  user?: string;
  isLoggedIn: boolean;
  fixedContext: () => void;
}

interface State {
  user?: string;
  isLoggedIn: boolean;
}

export const AuthContext = createContext<Context>({
  isLoggedIn: false,
  fixedContext: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [state, setState] = useState<State>({ isLoggedIn: false });

  const fixedContext = () => {
    setState({ isLoggedIn: true });
  };

  return (
    <SafeAreaProvider>
      <AuthContext.Provider
        value={{ isLoggedIn: state.isLoggedIn, fixedContext }}
      >
        {children}
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

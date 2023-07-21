import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../.firebase";

interface Props {
  children: React.ReactNode;
}

interface Context {
  state: State;
  setState: (state: State) => void;
}

interface State {
  user: User;
  isLoggedIn: boolean;
}

interface User {
  userID: string;
  userName: string;
  userEmail: string;
}

export const defaultContextState: State = {
  user: {
    userID: "",
    userName: "",
    userEmail: "",
  },
  isLoggedIn: false,
};

export const AuthContext = createContext<Context>({
  state: defaultContextState,
  setState: (state) => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [state, setState] = useState<State>(defaultContextState);
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth();

  onAuthStateChanged(FIREBASE_AUTH, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log(user);
    }
  });

  return (
    <SafeAreaProvider>
      <AuthContext.Provider value={{ state, setState }}>
        {children}
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
};

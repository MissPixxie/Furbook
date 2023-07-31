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
  user: User;
  isLoggedIn: boolean;
}

interface User {
  userImg: string;
  userID: string;
  userName: string;
  userEmail: string;
  userPwd: string;
  userLocation: {
    userCountry: string;
    userCity: string;
  };
  userDogs: [];
  userSavedPlaces: [];
  userSavedEvents: [];
  userMessages: [];
}

export const defaultContextState: State = {
  user: {
    userImg: "",
    userID: "",
    userName: "",
    userEmail: "",
    userPwd: "",
    userLocation: {
      userCountry: "",
      userCity: "",
    },
    userDogs: [],
    userSavedPlaces: [],
    userSavedEvents: [],
    userMessages: [],
  },
  isLoggedIn: false,
};

export const UserContext = createContext<Context>({
  state: defaultContextState,
  setState: (state) => {},
});

export const UserProvider = ({ children }: Props) => {
  const [state, setState] = useState<State>(defaultContextState);

  return (
    <UserContext.Provider value={{ state, setState }}>
      {children}
    </UserContext.Provider>
  );
};

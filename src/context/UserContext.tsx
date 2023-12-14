import React, { createContext, useState } from "react";
import { useReducer } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import UsersModel from "../../Server/models/UsersModel";
import { Events, Places } from "../components/Types";

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
  userCountry: string;
  userCity: string;
  userDogs: [];
  userSavedPlaces: Array<Places>;
  userSavedEvents: Array<Events>;
  userMessages: [];
}

export const defaultContextState: State = {
  user: {
    userImg: "",
    userID: "",
    userName: "",
    userEmail: "",
    userPwd: "",
    userCountry: "",
    userCity: "",
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

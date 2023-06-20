import React, { createContext, useContext, useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import { View } from "react-native-web";
import { BottomTabs } from "./src/components/BottomTabs";

const MyTheme = {
  dark: {
    dark: true,
    colors: {
      primary: "#202020",
      background: "#000",
      card: "rgb(255, 255, 255)",
      text: "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "#f3f3f3",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  },
};

export const ThemeContext = createContext(MyTheme.light);

export default function App({ children }) {
  const [theme, setTheme] = useState(MyTheme.light);

  const toggleTheme = () => {
    const newTheme = theme === MyTheme.light ? MyTheme.dark : MyTheme.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer theme={theme}>
        {/* <        <AuthStack /> */}
        {children}
        {/*<AppStack />*/}
        <BottomTabs />
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

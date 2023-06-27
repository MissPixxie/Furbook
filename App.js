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
      text: "#fff",
      border: "",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#252525", "#141414"]
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "#fff",
      background: "#f3f3f3",
      card: "rgb(255, 255, 255)",
      text: "#000",
      border: "",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#bced95", "#fff"]
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

import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, useState, useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BottomTabs } from "./src/components/BottomTabs";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import { ThemeContext, ThemeProvider } from "./src/context/ThemeContext";
import { AuthContext, AuthProvider } from "./src/context/AuthContext";

interface Props {
  children: React.ReactNode;
}

export default function App({ children }: Props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, fixedContext } = useContext(AuthContext);

  console.log(isLoggedIn);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer theme={theme}>
          <AuthProvider>
            <AuthStack />
            {children}
            {isLoggedIn === true && <BottomTabs />}
          </AuthProvider>
          {/* <AppStack /> */}
          {/* <BottomTabs /> */}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

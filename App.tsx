import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthContext, AuthProvider } from "./src/context/AuthContext";
import { ThemeContext, ThemeProvider } from "./src/context/ThemeContext";
import { AuthStack } from "./src/navigation/AuthStack";

interface Props {
  children: React.ReactNode;
}

// skärmläsare ?
// olika default inställningar beroende på ålder?

export default function App({ children }: Props) {
  const { state } = useContext(AuthContext);

  console.log(state);

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <AuthStack />
          {children}
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

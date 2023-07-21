import { NavigationProp } from "@react-navigation/native";
import React, { useContext } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeContext, ThemeProvider } from "./src/context/ThemeContext";
import { AuthStack } from "./src/navigation/AuthStack";

interface Props {
  children: React.ReactNode;
}

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Drawer = createDrawerNavigator();
// skärmläsare ?
// olika default inställningar beroende på ålder?

export default function App({ children }: Props) {
  //const { state } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthStack />
        {children}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { AppStateStatus, Platform } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";

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

  const queryClient = new QueryClient();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AuthStack />
            {children}
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

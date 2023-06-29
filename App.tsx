import { NavigationContainer } from "@react-navigation/native";
import React, { createContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { BottomTabs } from "./src/components/BottomTabs";

interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    tabBar: Array<string>;
  };
}
interface MyTheme {
  dark: Theme;
  light: Theme;
}
interface Context {
  theme: Theme;
  toggleTheme: () => void;
}

const MyTheme: MyTheme = {
  dark: {
    dark: true,
    colors: {
      primary: "#202020",
      secondary: "#e2e2e2",
      background: "#000",
      card: "rgb(255, 255, 255)",
      text: "#fff",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#252525", "#141414"],
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "#f4f4f4",
      secondary: "#e2e2e2",
      background: "#f3f3f3",
      card: "rgb(255, 255, 255)",
      text: "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#bced95", "#fff"],
    },
  },
};

export const ThemeContext = createContext<Context>({
  theme: MyTheme.light,
  toggleTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function App({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(MyTheme.light);

  const toggleTheme = () => {
    const newTheme = theme === MyTheme.light ? MyTheme.dark : MyTheme.light;
    setTheme(newTheme);
  };

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <NavigationContainer theme={theme}>
          {/* <        <AuthStack /> */}
          {children}
          {/*<AppStack />*/}
          <BottomTabs />
        </NavigationContainer>
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}

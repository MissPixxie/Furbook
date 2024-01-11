import React, { createContext, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GradientTabIndicator } from "../navigation/GradientTabIndicator";

interface Props {
  children: React.ReactNode;
}

interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    secondaryLight: string;
    background: string;
    card: string;
    inputs: string;
    text: string;
    border: string;
    notification: string;
    tabBar: Array<string>;
    drawer: Array<string>;
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
      primary: "#373737",
      secondary: "#e2e2e2",
      secondaryLight: "#E5E5E5",
      background: "#151515",
      card: "#272727",
      inputs: "#272727",
      text: "#fff",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#252525", "#141414"],
      drawer: ["#3c3c3c", "#7d7d7d"],
    },
  },
  light: {
    dark: false,
    colors: {
      primary: "#f4f4f4",
      secondary: "#e2e2e2",
      secondaryLight: "#FEFEFE",
      background: "#f3f3f3",
      card: "#fff",
      inputs: "#fff",
      text: "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
      tabBar: ["#bced95", "#fff"],
      drawer: ["#eaeaea", "#fff"],
    },
  },
};

export const ThemeContext = createContext<Context>({
  theme: MyTheme.light,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(MyTheme.light);

  const toggleTheme = () => {
    const newTheme = theme === MyTheme.light ? MyTheme.dark : MyTheme.light;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

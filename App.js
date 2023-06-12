import React, { useContext, createContext, useState } from "react";
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import { ThemeProvider } from './src/components/Theme';

export const themes = {
  light: {
      background: '#fff',
      textColor: '#000'
  },
  dark: {
      background: '#000',
      textColor: '#fff'
  }
};

const ThemeContext = createContext(); 

export default function App({ children }) {

  const [theme, setTheme] = useState(themes.light); 

  const toggleTheme = () => { 
    const newTheme = theme === themes.light ? themes.dark : themes.light; 
    setTheme(newTheme);
}; 

  return (
        <NavigationContainer>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <AuthStack />
                {children} 
            </ThemeContext.Provider>
          {/*<AppStack />*/}
        </NavigationContainer>        
  );
}

export function useTheme() { 
  const context = useContext(ThemeContext); 

  return context; 
}


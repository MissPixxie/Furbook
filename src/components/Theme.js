import React, { useContext, createContext, useState } from "react";


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

 export const ThemeProvider = ({ children }) => { 

    const [theme, setTheme] = useState(themes.light); 

    const toggleTheme = () => { 
        const newTheme = theme === themes.light ? themes.dark : themes.light; 
        setTheme(newTheme);
    }; 

        return ( 
        <ThemeContext.Provider value={{ theme, toggleTheme }}> 
            {children} 
        </ThemeContext.Provider> 
        ); 
    }; 
    
    export function useTheme() { 
        const context = useContext(ThemeContext); 

        return context; 
    }
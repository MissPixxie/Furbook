import React, { createContext } from "react";



export const ThemeContext = createContext({light: {
    backgroundColor: 'white'
    },
    dark: {
        backgroundColor: 'black'
    }});


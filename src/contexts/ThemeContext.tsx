import { useState, useEffect, ReactNode, createContext, useContext } from 'react'

interface ThemeContextData {
    isLight: boolean;
    setToLight: () => void;
    setToDark: () => void;
}

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [isLight, setIsLight] = useState(false)

    function setToLight() {
        setIsLight(true)
    }

    function setToDark() {
        setIsLight(false)
    }


    return (
        <ThemeContext.Provider value={{
            isLight,
            setToLight,
            setToDark
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeContext)
}
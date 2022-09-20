import { useState, useEffect, useContext, createContext } from "react"

// Saved theme
export const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedRefs = window.localStorage.getItem("color-theme")
        if (typeof storedRefs === "string") {
            return storedRefs
        }
        
        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        if (userMedia.matches) {
            return "dark"
        }
    }
    return "light"
}

// Context
const ThemeContext = createContext()

export const ThemeProvider = ({initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme)

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")
    const buttonClass = "flex items-center cursor-pointer"
    const iconClass = "text-primary text-2xl mr-2"
    
    const rawSetTheme = (theme) => {
        const root = window.document.documentElement
        const isDark = theme === "dark"

        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(theme)

        localStorage.setItem("color-theme", theme)
    }


    if (initialTheme) {
        rawSetTheme(initialTheme)
    }
    
    useEffect(() => {
        rawSetTheme(theme)
    }, [theme]);
 
    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme,
            buttonClass,
            iconClass
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext)
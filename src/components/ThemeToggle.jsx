import React from 'react'
import {HiSun, HiMoon} from "react-icons/hi"
import { useThemeContext } from "../context/ThemeContext"

const ThemeToggle = () => {
    const {theme, setTheme} = useThemeContext()
    const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark")
    const buttonClass = "flex items-center cursor-pointer"
    const iconClass = "text-primary text-2xl mr-2"
    
    return (
        <div className="p-2">
            {theme === "dark" ? (
                <div className={buttonClass} onClick={toggleDarkMode}>
                    <HiSun className={iconClass} /> Light Mode
                </div>
            ) : <div className={buttonClass} onClick={toggleDarkMode}>
                    <HiMoon className={iconClass} /> Dark Mode
                </div>}
        </div>
  )
}

export default ThemeToggle
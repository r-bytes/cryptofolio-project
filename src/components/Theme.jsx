import React from 'react'
import { HiSun, HiMoon } from "react-icons/hi"
import { useThemeContext } from "../context/ThemeContext"

const Theme = () => {
    const {theme, toggleTheme, buttonClass, iconClass} = useThemeContext()
    
    return (
        <div className="p-2 hover:text-accent">
            {theme === "dark" ? (
                <div className={buttonClass} onClick={toggleTheme}>
                    <HiSun className={iconClass} /> Light Mode
                </div>
            ) : <div className={buttonClass} onClick={toggleTheme}>
                    <HiMoon className={iconClass} /> Dark Mode
                </div>}
        </div>
    )
}

export default Theme
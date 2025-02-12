import { useState } from "react";
import "./App.css";

export default function Theme() {
    
const [darkMode, setDarkMode] = useState(false);

const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); 
};

return (
    <div className={darkMode ? "dark-theme" : "light-theme"} >
    <button onClick={toggleTheme} className="switch-button">
        Switch Theme
    </button>
    </div>
);
}
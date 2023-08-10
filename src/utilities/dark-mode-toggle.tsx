// DarkModeToggle.tsx

import { useState } from "react";
import { prefersDarkMode } from "./utilities"; // Path to the utility file

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(prefersDarkMode());

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  return <button onClick={toggleDarkMode}>Toggle Dark Mode</button>;
}

export default DarkModeToggle;

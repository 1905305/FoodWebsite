// DarkModeApp.js
import React, { useState } from "react";
import "../Darkmode/darkMode.css"; // Import the dark mode CSS file

const DarkModeApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h1>Dark Mode Example</h1>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <p></p>
    </div>
  );
};

export default DarkModeApp;

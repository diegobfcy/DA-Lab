import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>Welcome to the Theme Switcher</h1>
      <ThemeSwitcher />
    </ThemeContext.Provider>
  );
}

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={toggleTheme}>Switch Theme</button>
      <div style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}>
        <h2>Current Theme: {theme}</h2>
        <Component />
      </div>
    </>
  );
}

function Component() {
  const { theme } = useContext(ThemeContext);
  return <p>{`The component is using ${theme} theme.`}</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import { createContext, useContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = function () {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("ThemeContext was used outside a ThemeProvider");
  return context;
};

export { useTheme, ThemeProvider };

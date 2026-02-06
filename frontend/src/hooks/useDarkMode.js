import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);
  const time = new Date().getHours()
  const currTime = time < 6 || time > 18

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    
    if (saved !== null) {
      setIsDark(JSON.parse(saved));
    } else {
      setIsDark(prefersDark);
    } 
   
    if(currTime) setIsDark(prefersDark)
  }, [currTime]);
  
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(isDark));
  }, [isDark]);

  function toggleDarkMode() {
    setIsDark((isDark) => !isDark);
  }

  return [isDark, toggleDarkMode];
}

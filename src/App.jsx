// App.jsx
import { useState, useEffect } from "react";
import StrudelDemo from "./components/StrudelDemo";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme] = useState("dark"); // default dark

  // Apply theme class to root html element
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-panel text-text">
      {/* Theme Toggle */}
      <ThemeToggle selected={theme} setSelected={setTheme} />

      {/* Main Demo */}
      <StrudelDemo />
    </div>
  );
}

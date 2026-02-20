import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleDarkMode({ type = "default" }) {
  const { isDark, toggleDarkMode } = useTheme();

  const base = "rounded-md";

  const styles = {
    default: base + " text-xl",
    absolute: base + " absolute right-7 top-10 text-2xl",
  };

  return (
    <button onClick={toggleDarkMode} className={styles[type]}>
      <p className="text-xl dark:text-white">
        {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </p>
    </button>
  );
}

export default ToggleDarkMode;

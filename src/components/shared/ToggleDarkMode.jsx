import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleDarkMode({ type = "default" }) {
  const { isDark, toggleDarkMode } = useTheme();

  const base = "rounded-md";

  const styles = {
    default: base + " text-xl",
    absolute:
      base +
      " absolute z-10 2xl:right-8 lg:right-3 sm:right-10 right-3 top-10 text-2xl lg:border-none border-stone-300 dark:border-gray-700 py-1 px-2 border",
  };

  if (type === "absolute")
    return (
      <button onClick={toggleDarkMode} className={styles[type]}>
        <span className="text-xl dark:text-white">
          {isDark ? (
            <span className="flex items-center gap-1">
              <HiOutlineSun />
              <span className="lg:hidden text-sm">Claro</span>
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <HiOutlineMoon />
              <span className="lg:hidden text-sm">Escuro</span>
            </span>
          )}
        </span>
      </button>
    );

  return (
    <button onClick={toggleDarkMode} className={styles[type]}>
      <span className="text-xl dark:text-white">
        {isDark ? (
          <span>
            <HiOutlineSun />
          </span>
        ) : (
          <span>
            <HiOutlineMoon />
          </span>
        )}
      </span>
    </button>
  );
}

export default ToggleDarkMode;

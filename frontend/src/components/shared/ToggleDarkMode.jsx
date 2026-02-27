import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleDarkMode({ type = "default" }) {
  const { isDark, toggleDarkMode } = useTheme();

  const base = "rounded-md";

  const styles = {
    default: base + " text-xl",
    absolute:
      base +
      " absolute 2xl:right-4 lg:right-3 sm:right-10 right-3 top-10 text-2xl lg:border-none border-stone-300 dark:border-gray-700 py-1 px-2 border",
  };

  if (type === "absolute")
    return (
      <button onClick={toggleDarkMode} className={styles[type]}>
        <p className="text-xl dark:text-white">
          {isDark ? (
            <p className="flex items-center gap-1">
              <HiOutlineSun />
              <span className="lg:hidden text-sm">Claro</span>
            </p>
          ) : (
            <p className="flex items-center gap-1">
              <HiOutlineMoon />
              <span className="lg:hidden text-sm">Escuro</span>
            </p>
          )}
        </p>
      </button>
    );

  return (
    <button onClick={toggleDarkMode} className={styles[type]}>
      <p className="text-xl dark:text-white">
        {isDark ? (
          <p>
            <HiOutlineSun />
          </p>
        ) : (
          <p>
            <HiOutlineMoon />
          </p>
        )}
      </p>
    </button>
  );
}

export default ToggleDarkMode;

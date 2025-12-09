import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleDarkMode() {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className=" p-2 rounded-md">
      <p className="text-xl dark:text-white">
        {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </p>
    </button>
  );
}

export default ToggleDarkMode;

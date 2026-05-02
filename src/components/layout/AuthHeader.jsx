import { HiOutlineLogout, HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import { useModal } from "../../contexts/ModalContext";
import UserAvatar from "../shared/UserAvatar";

function ThemeToggle() {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Alternar tema"
      className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out hover:scale-[1.03] dark:hover:bg-gray-900 dark:focus:ring-gray-700"
    >
      <span className="text-xl">
        {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
      </span>
    </button>
  );
}

function UserInfo({ user }) {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <UserAvatar user={user} size="sm" />
      <div className="hidden md:flex flex-col leading-tight">
        <p className="text-xs font-semibold lg:text-sm">
          {user?.name || "Utilizador"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {user?.role || "-"}
        </p>
      </div>
    </div>
  );
}

function LogoutButton() {
  const { toggleLogoutModal } = useModal();

  return (
    <button
      type="button"
      onClick={toggleLogoutModal}
      aria-label="Terminar sessão"
      className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200 text-xl hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 ease-in-out hover:scale-[1.03] dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    >
      <HiOutlineLogout />
    </button>
  );
}

function AuthHeader() {
  const { user } = useAuth();
  const firstName = user?.name?.split(" ")[0] || "Utilizador";

  return (
    <header className="h-16 border-b-[0.1px] border-slate-200 bg-white px-3 shadow-sm sm:px-4 lg:px-6 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex h-full items-center justify-between">
        <p className="hidden text-sm font-medium text-gray-700 md:block dark:text-gray-300">
          Bem Vindo de volta, <span className="font-semibold">{firstName}</span>
        </p>

        <div className="ml-auto flex items-center gap-2 md:gap-3 lg:gap-4">
          <ThemeToggle />
          <UserInfo user={user} />
          <LogoutButton />
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;

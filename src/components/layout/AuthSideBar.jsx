import { useMemo, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { useAuth } from "../../contexts/AuthContext";
import { useAuthSidebar } from "../../contexts/AuthSidebarContext";
import UserAvatar from "../shared/UserAvatar";

function AuthSideBar({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isSidebarOpen, toggleSidebar } = useAuthSidebar();
  const { user } = useAuth();

  const childrenArray = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children],
  );
  const [logoSection, ...contentSections] = childrenArray;

  const desktopWidth = isSidebarOpen ? "w-64" : "w-20";

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="fixed left-3 top-3 z-40 p-2 transition-all duration-300 md:hidden"
        aria-label="Abrir menu"
      >
        <FiMenu className="text-2xl" />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 md:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r-[0.1px] border-slate-200 bg-white text-gray-800 shadow-2xl transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white md:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-3">
          <div>{logoSection}</div>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-200 transition-all duration-300 dark:hover:bg-gray-700"
            aria-label="Fechar menu"
          >
            <HiChevronDoubleLeft className="text-xl" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto px-2 pb-4">
            {contentSections}
          </div>

          <div className="mx-3 mb-4 rounded-xl bg-slate-100 p-3 dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <UserAvatar user={user} size="md" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {user?.name || "User"}
                </p>
                <p className="truncate text-xs text-gray-500 dark:text-gray-300">
                  {user?.role || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <aside
        className={`relative hidden h-[100dvh] flex-col overflow-hidden border-r-[0.1px] border-slate-200 bg-white text-gray-800 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white md:row-span-full md:sticky md:top-0 md:flex ${desktopWidth}`}
      >
        <div
          className={`flex items-center justify-between ${isSidebarOpen ? "px-2" : "px-3 pt-3 mx-auto my-0"}`}
        >
          <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
            {logoSection}
          </div>
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-200 transition-all duration-300 dark:hover:bg-gray-700"
            aria-label="Alternar sidebar"
          >
            <HiChevronDoubleLeft
              className={`text-xl transition-transform duration-300 ${
                isSidebarOpen ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 overflow-y-auto pb-4">{contentSections}</div>

          <div className="mx-3 mb-4 rounded-xl bg-slate-100 p-3 dark:bg-gray-900">
            <div
              className={`flex items-center ${
                isSidebarOpen ? "gap-3" : "justify-center"
              }`}
            >
              <UserAvatar user={user} size="md" />
              <div
                className={`min-w-0 transition-all duration-300 ${
                  isSidebarOpen
                    ? "w-auto opacity-100"
                    : "w-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="truncate text-sm font-semibold">
                  {user?.name || "User"}
                </p>
                <p className="truncate text-xs text-gray-500 dark:text-gray-300">
                  {user?.role || ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default AuthSideBar;

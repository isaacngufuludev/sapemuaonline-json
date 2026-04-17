import { createContext, useContext, useMemo, useState } from "react";

const AuthSidebarContext = createContext(undefined);

function AuthSidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      openSidebar,
      closeSidebar,
    }),
    [isSidebarOpen],
  );

  return (
    <AuthSidebarContext.Provider value={value}>
      {children}
    </AuthSidebarContext.Provider>
  );
}

function useAuthSidebar() {
  const context = useContext(AuthSidebarContext);

  if (!context) {
    throw new Error(
      "useAuthSidebar deve ser usado dentro de AuthSidebarProvider",
    );
  }

  return context;
}

export { AuthSidebarProvider, useAuthSidebar };

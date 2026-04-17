import { createContext, useContext, useState, useCallback } from "react";
import { clearGetCache } from "../services/api";

const RefreshContext = createContext();

export const RefreshProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = useCallback(() => {
    clearGetCache();
    setRefreshKey((prev) => prev + 1);
  }, []);

  return (
    <RefreshContext.Provider value={{ refreshKey, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error(
      "useCoursesRefresh deve ser usado dentro de CoursesRefreshProvider"
    );
  }
  return context;
};

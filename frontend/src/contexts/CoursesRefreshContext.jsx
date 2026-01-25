import { createContext, useContext, useState, useCallback } from "react";

const CoursesRefreshContext = createContext();

export const CoursesRefreshProvider = ({ children }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  return (
    <CoursesRefreshContext.Provider value={{ refreshKey, triggerRefresh }}>
      {children}
    </CoursesRefreshContext.Provider>
  );
};

export const useCoursesRefresh = () => {
  const context = useContext(CoursesRefreshContext);
  if (!context) {
    throw new Error(
      "useCoursesRefresh deve ser usado dentro de CoursesRefreshProvider"
    );
  }
  return context;
};

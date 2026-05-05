import { createContext, useContext, useEffect, useReducer } from "react";
import { useToast } from "../hooks/useToast";
import { get } from "../services/api";

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isLoading: true,
        isAuthenticated: true,
      };
    case "logout":
      return { ...state, isLoading: false, user: null, isAuthenticated: false };
    case "restore":
      return { ...state, user: action.payload, isAuthenticated: true };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      dispatch({ type: "restore", payload: JSON.parse(saved) });
    }
  }, []);

  async function login({ loginMethod, password }) {
    const users = await get("users");

    const userFound = users.find(
      (user) =>
        (user.email === loginMethod || user.id === loginMethod) &&
        user.password === password,
    );

    if (userFound) {
      dispatch({ type: "login", payload: userFound });
      localStorage.setItem("currentUser", JSON.stringify(userFound));

      const navigationTimer = setTimeout(() => {
        showSuccess("Login executado com sucesso");
      }, 1000);

      return () => clearTimeout(navigationTimer);
    } else {
      showError("Credênciais invalidas, tente de novo");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { useAuth, AuthProvider };

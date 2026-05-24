import { createContext, useContext, useEffect, useReducer } from "react";
import { useToast } from "../hooks/useToast";
import { get } from "../services/api";
import { addLoginEvent } from "../services/loginEvents";

const AuthContext = createContext();

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
  isInitializing: true,
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
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isInitializing: false,
      };
    case "initialized":
      return { ...state, isInitializing: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, isInitializing }, dispatch] =
    useReducer(reducer, initialState);
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem("currentUser");
    if (saved) {
      dispatch({ type: "restore", payload: JSON.parse(saved) });
    } else {
      dispatch({ type: "initialized" });
    }
  }, []);

  async function login({ loginMethod, password }) {
    if (!navigator.onLine) {
      showError("Sem conexão com a internet. Verifique a sua ligação.");
      return;
    }

    try {
      const users = await get("users");

      const userFound = users.find(
        (user) =>
          (user.email === loginMethod || user.id === loginMethod) &&
          user.password === password,
      );

      if (userFound) {
        if (userFound.isActive === false) {
          showError(
            "Conta ainda não ativada. Use o link de primeiro acesso enviado por email.",
          );
          return;
        }

        dispatch({ type: "login", payload: userFound });
        localStorage.setItem("currentUser", JSON.stringify(userFound));

        if (userFound.role === "student") {
          addLoginEvent(userFound);
        }

        const navigationTimer = setTimeout(() => {
          showSuccess("Login executado com sucesso");
        }, 1000);

        return () => clearTimeout(navigationTimer);
      } else {
        showError("Credênciais invalidas, tente de novo");
      }
    } catch {
      showError("Sem conexão com a internet. Verifique a sua ligação.");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("currentUser");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        isInitializing,
        login,
        logout,
      }}
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

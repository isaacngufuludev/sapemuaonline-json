import { createContext, useContext, useReducer } from "react";
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
        isLoading: true,
        user: action.payload,
        isAuthenticated: true,
      };
    case "logout":
      return { ...state, isLoading: false, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isLoading, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { showSuccess, showError } = useToast();

  async function login({ email, password }) {
    const users = await get("users");
    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      dispatch({ type: "login", payload: userFound });
      showSuccess("Login executado com sucesso");
    } else {
      showError("Credênciais invalidas, tente de novo");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
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

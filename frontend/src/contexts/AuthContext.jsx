import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { useToast } from "../hooks/useToast";

const AuthContext = createContext();

const users = [
  {
    id: 4355,
    email: "carlosmorais@mail.com",
    name: "Carlos Mendes",
    birthYear: "1985-04-12",
    phoneNumber: "+244 923 456 789",
    genre: "Masculino",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    name: "Ana Paulo",
    email: "anapaulo11@hmail.com",
    birthYear: "1992-09-25",
    phoneNumber: "+244 934 987 654",
    genre: "Feminino",
    password: "2026",
    role: "teacher",
  },
  {
    id: 3,
    name: "João Silva",
    email: "joaosilva@gmail.com",
    birthYear: "2004-02-18",
    phoneNumber: "+244 912 345 678",
    genre: "Masculino",
    password: "2005",
    role: "student",
  },
];

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { showSuccess, showError } = useToast();

  function login({ id, password }) {
    const userFound = users.find(
      (user) => user.id === id && user.password === password
    );

    if (!userFound) {
      showError("Credênciais invalidas, tente de novo");
    } else {
      dispatch({ type: "login", payload: userFound });
      showSuccess("Login com sucesso");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
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

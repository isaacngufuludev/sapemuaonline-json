import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast.js";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Loading from "./Loading.jsx";
import AuthInput from "../ui/AuthInput.jsx";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, login, isAuthenticated, isLoading } = useAuth();
  const { showWarning } = useToast();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) showWarning("Preencha todos os campos por favor");
    if (email || (id && password)) {
      login({ id, email, password });
    }

    setEmail("");
    setPassword("");
    document.activeElement.blur();
  }

  useEffect(
    function () {
      if (!user) return;
      if (isAuthenticated && user.role === "admin") navigate("/area/admin");
      if (isAuthenticated && user.role === "teacher") navigate("/area/teacher");
      if (isAuthenticated && user.role === "student") navigate("/area/student");
    },
    [user, isAuthenticated, navigate],
  );

  return (
    <>
      <form
        className="flex flex-col gap-4 mb-3"
        action=""
        onSubmit={handleSubmit}
      >
        <AuthInput
          id="password"
          value={email || id}
          type="text"
          onChange={(e) => {
            console.log(email, id);
            setEmail(e.target.value) || setId(e.target.value);
          }}
          name="E-mail ou Codigo Interno"
        />
        <div className="relative mb-2">
          <AuthInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            name="Palavra-Passe"
          />
          <button
            type="button"
            className="absolute flex items-center right-4 top-1/2 -translate-y-1/2 "
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((show) => !show);
            }}
          >
            {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
          </button>
        </div>
        <button
          className="bg-blue-700 text-white rounded-full text-sm font-semibold flex items-center  p-[12px] justify-center"
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : "Iniciar Sessão"}
          {/* {<Loading size={25} />} */}
        </button>
      </form>
    </>
  );
}

export default LoginForm;

import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext.jsx";
import { useToast } from "../../../hooks/useToast.js";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Loading from "../../../components/shared/Loading.jsx";
import AuthInput from "./AuthInput.jsx";

function LoginForm() {
  const [loginMethod, setLoginMethod] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const { showWarning } = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!loginMethod || !password)
      showWarning("Preencha todos os campos por favor");

    if (loginMethod && password) {
      login({ loginMethod, password });
    }

    setLoginMethod("");
    setPassword("");
    document.activeElement.blur();
  }

  return (
    <>
      <form
        className="flex flex-col gap-3 sm:gap-5 mb-2 "
        action=""
        onSubmit={handleSubmit}
      >
        <AuthInput
          id="email"
          value={loginMethod}
          type="text"
          onChange={(e) => setLoginMethod(e.target.value)}
          name="Endereço de E-mail"
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
          className="bg-blue-700 text-white rounded-full text-sm font-semibold flex items-center  sm:p-[10px] p-[12px] justify-center"
          disabled={isLoading}
        >
          {isLoading ? <Loading size={25} /> : "Iniciar Sessão"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;

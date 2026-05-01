import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useToast } from "../../../hooks/useToast";
import { patch } from "../../../services/api";
import Loading from "../../../components/shared/Loading";
import AuthInput from "./AuthInput";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetUser, setResetUser] = useState(null);
  const { showError, showSuccess, showWarning } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedResetUser = sessionStorage.getItem("passwordResetUser");
    const parsedResetUser = savedResetUser ? JSON.parse(savedResetUser) : null;
    const userFromRoute = location.state?.userId
      ? { id: location.state.userId, email: location.state.email }
      : null;

    setResetUser(userFromRoute || parsedResetUser);
  }, [location.state]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!resetUser?.id) {
      showWarning("Informe primeiro o email da conta");
      navigate("/auth/forgot-password");
      return;
    }

    if (!password || !confirmPassword) {
      showWarning("Preencha todos os campos por favor");
      return;
    }

    if (password.length < 4) {
      showWarning("A palavra-passe deve ter pelo menos 4 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      showError("As palavras-passe não coincidem");
      return;
    }

    try {
      setIsSubmitting(true);
      await patch("users", resetUser.id, { password });
      sessionStorage.removeItem("passwordResetUser");
      showSuccess("Palavra-passe redefinida com sucesso");
      navigate("/auth/login");
    } catch {
      showError("Não foi possível redefinir a palavra-passe");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="relative">
        <AuthInput
          id="password"
          value={password}
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          name="Nova Palavra Passe"
          autoComplete="new-password"
          required
        />
        <button
          type="button"
          className="absolute flex items-center right-4 top-1/2 -translate-y-1/2"
          onClick={() => setShowPassword((show) => !show)}
        >
          {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
        </button>
      </div>
      <AuthInput
        id="confirmPassword"
        value={confirmPassword}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setConfirmPassword(e.target.value)}
        name="Confirmar Palavra Passe"
        autoComplete="new-password"
        required
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-700 w-full text-white rounded-full text-sm font-semibold flex items-center  sm:p-[10px] p-[12px] justify-center"
      >
        {isSubmitting ? <Loading size={25} /> : "Redefinir"}
      </button>
    </form>
  );
}

export default ResetPasswordForm;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useToast } from "../../../hooks/useToast";
import { get, patch } from "../../../services/api";
import Loading from "../../../components/shared/Loading";
import AuthInput from "./AuthInput";

function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [user, setUser] = useState(null);
  const { token: rawToken } = useParams();
  const token = rawToken ? decodeURIComponent(String(rawToken).trim()) : "";
  const { showError, showSuccess } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function validateToken() {
      if (!token) {
        showError("Token inválido");
        navigate("/auth/forgot-password");
        return;
      }

      try {
        // Buscar todos usuários e filtrar pelo resetToken
        const users = await get("users", { forceFresh: true });
        const userFound = users.find(
          (u) => String(u.resetToken).trim() === token,
        );

        if (!userFound) {
          showError("Token inválido ou expirado");
          navigate("/auth/forgot-password");
          return;
        }

        // Verificar expiração
        // const expires = new Date(userFound.resetTokenExpires);
        // if (!userFound.resetTokenExpires || isNaN(expires.getTime())) {
        //   showError("Token inválido ou expirado");
        //   navigate("/auth/forgot-password");
        //   return;
        // }

        // if (expires < new Date()) {
        //   showError("Token expirado. Solicite um novo link de recuperação.");
        //   navigate("/auth/forgot-password");
        //   return;
        // }

        setUser(userFound);
      } catch (error) {
        console.error("Erro ao validar token:", error);
        showError("Erro ao validar token");
        navigate("/auth/forgot-password");
      } finally {
        setIsValidating(false);
      }
    }

    validateToken();
  }, [token, navigate, showError]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user) {
      showError("Usuário não encontrado");
      return;
    }

    if (!password || !confirmPassword) {
      showError("Preencha todos os campos por favor");
      return;
    }

    if (password.length < 4) {
      showError("A palavra-passe deve ter pelo menos 4 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      showError("As palavras-passe não coincidem");
      return;
    }

    try {
      setIsSubmitting(true);
      await patch("users", user.id, {
        password,
        resetToken: "",
        resetTokenExpires: "",
      });
      showSuccess("Palavra-passe redefinida com sucesso");
      navigate("/auth/login", { replace: true });
      return;
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      showError("Não foi possível redefinir a palavra-passe");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isValidating) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loading size={40} />
        <span className="ml-2">Validando token...</span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center p-8">
        <p className="text-red-600">Token inválido ou expirado.</p>
        <button
          onClick={() => navigate("/auth/forgot-password")}
          className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-full"
        >
          Solicitar novo link
        </button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <p className="text-gray-600">
          Redefinindo senha para: <strong>{user?.email}</strong>
        </p>
      </div>
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
        className="bg-blue-700 w-full text-white rounded-full text-sm font-semibold flex items-center sm:p-[10px] p-[12px] justify-center disabled:opacity-50"
      >
        {isSubmitting ? <Loading size={25} /> : "Redefinir Senha"}
      </button>
    </form>
  );
}

export default ResetPasswordForm;

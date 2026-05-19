import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import AuthInput from "./AuthInput";
import Loading from "../../../components/shared/Loading";
import { useToast } from "../../../hooks/useToast";
import { API_URL } from "../../../utils/constants";

function PrimeiroAcesso() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isValidating, setIsValidating] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState(null);
  const [pageError, setPageError] = useState("");
  const { token: rawToken } = useParams();
  const token = rawToken ? decodeURIComponent(String(rawToken).trim()) : "";
  const navigate = useNavigate();
  const { showError, showSuccess } = useToast();

  useEffect(() => {
    async function validateToken() {
      if (!token) {
        setPageError("Token inválido.");
        setIsValidating(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/users`);

        if (!response.ok) {
          throw new Error("Não foi possível validar o link.");
        }

        const users = await response.json();
        const userFound = users.find(
          (item) => String(item.firstAccessToken || "").trim() === token,
        );

        if (!userFound) {
          setPageError("Token inválido.");
          return;
        }

        const expires = new Date(userFound.firstAccessExpires);
        if (
          !userFound.firstAccessExpires ||
          Number.isNaN(expires.getTime()) ||
          expires <= new Date()
        ) {
          setPageError("Este link de primeiro acesso expirou.");
          return;
        }

        setUser(userFound);
      } catch (error) {
        console.error("Erro ao validar primeiro acesso:", error);
        setPageError("Erro ao validar o link. Tente novamente.");
      } finally {
        setIsValidating(false);
      }
    }

    validateToken();
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!user) {
      showError("Token inválido ou expirado.");
      return;
    }

    if (!password || !confirmPassword) {
      showError("Preencha todos os campos.");
      return;
    }

    if (password.length < 4) {
      showError("A palavra-passe deve ter pelo menos 4 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      showError("As palavras-passe não coincidem.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(`${API_URL}/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          firstAccessToken: "",
          firstAccessExpires: "",
          isActive: true,
        }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível ativar a conta.");
      }

      showSuccess("Conta ativada com sucesso. Inicie sessão.");
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.error("Erro ao concluir primeiro acesso:", error);
      showError("Não foi possível definir a palavra-passe.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <div className="lg:grid lg:grid-cols-[2.5fr_1.1fr] xl:grid-cols-[3fr_1.3fr] px-3 sm:px-0 max-w-[350px] lg:max-w-full lg:mx-0 mx-auto">
        <div
          className="hidden lg:block lg:min-h-screen lg:bg-cover lg:bg-center"
          style={{ backgroundImage: "url('/imgs/login.png')" }}
        ></div>

        <div className="h-full lg:relative flex flex-col">
          <div className="flex h-full items-center translate-y-1/2 lg:translate-y-0">
            <div className="py-8 2xl:px-10 lg:px-4 lg:mx-auto w-full lg:my-auto">
              <h2 className="font-semibold text-xl md:text-[26px] md:mb-2">
                Primeiro Acesso
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-3">
                Defina a sua palavra-passe para ativar a conta
              </p>

              {isValidating && (
                <div className="flex items-center justify-center gap-2 p-8">
                  <Loading size={35} />
                  <span>Validando link...</span>
                </div>
              )}

              {!isValidating && pageError && (
                <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-md">
                  <p className="text-red-600 font-medium">{pageError}</p>
                  <button
                    type="button"
                    onClick={() => navigate("/auth/login")}
                    className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    Ir para login
                  </button>
                </div>
              )}

              {!isValidating && user && (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Ativando conta de: <strong>{user.email}</strong>
                  </p>

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
                      {showPassword ? (
                        <FiEye size={18} />
                      ) : (
                        <FiEyeOff size={18} />
                      )}
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
                    {isSubmitting ? <Loading size={25} /> : "Ativar Conta"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimeiroAcesso;

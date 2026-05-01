import { useState } from "react";
import { useUsers } from "../../../hooks/useUsers";
import AuthInput from "./AuthInput";
import { useToast } from "../../../hooks/useToast";
import { useNavigate } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const { users } = useUsers();
  const { showError, showSuccess } = useToast();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      showError("Preencha o campo, por favor");
      return;
    }

    const userFound = users.find(
      (user) => user.email?.toLowerCase() === normalizedEmail,
    );

    if (!userFound) {
      showError("Email não encontrado, tente novamente");
      return;
    }

    sessionStorage.setItem(
      "passwordResetUser",
      JSON.stringify({ id: userFound.id, email: userFound.email }),
    );
    showSuccess("Conta encontrada. Defina uma nova palavra-passe");
    navigate("/auth/reset-password", {
      state: { userId: userFound.id, email: userFound.email },
    });
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <AuthInput
        id="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        name="Endereço Email"
        autoComplete="email"
        required
      />
      <button
        type="submit"
        className="bg-blue-700 w-full text-white rounded-full text-sm font-semibold flex items-center  sm:p-[10px] p-[12px] justify-center"
      >
        Continuar
      </button>
    </form>
  );
}

export default ForgotPasswordForm;

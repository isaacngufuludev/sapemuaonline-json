import { useState } from "react";
import AuthInput from "./AuthInput";
import { useToast } from "../../../hooks/useToast";
import { useNavigate } from "react-router-dom";
import { get, patch } from "../../../services/api";
import emailjs from "@emailjs/browser";
import Loading from "../../../components/shared/Loading";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showError, showSuccess } = useToast();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      showError("Preencha o campo, por favor");
      return;
    }

    try {
      setIsSubmitting(true);

      // Buscar usuário pelo email
      const users = await get("users");
      const userFound = users.find(
        (user) => user.email?.toLowerCase() === normalizedEmail,
      );

      if (!userFound) {
        showError("Email não encontrado, tente novamente");
        return;
      }

      // Gerar token seguro
      const resetToken = crypto.randomUUID();
      const resetTokenExpires = new Date(Date.now() + 3600000).toISOString(); // 1 hora

      // Salvar token no db.json
      await patch("users", userFound.id, { resetToken, resetTokenExpires });

      // Criar link de redefinição
      const resetLink = `${window.location.origin}/reset-password/${resetToken}`;

      if (!userFound.email || !userFound.email.includes("@")) {
        throw new Error("Email do usuário inválido");
      }

      // Enviar e-mail usando EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Configuração EmailJS ausente. Verifique se as variáveis VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID e VITE_EMAILJS_PUBLIC_KEY estão definidas no arquivo .env",
        );
      }

      // Validar formato dos IDs
      if (!serviceId.startsWith("service_")) {
        throw new Error("Service ID inválido. Deve começar com 'service_'");
      }
      if (!templateId.startsWith("template_")) {
        throw new Error("Template ID inválido. Deve começar com 'template_'");
      }

      const templateParams = {
        to_email: userFound.email,
        recipient_email: userFound.email,
        from_name: "SAPEMUA ONLINE",
        to_name: userFound.name,
        reply_to: userFound.email,
        link: resetLink,
        message: `Olá ${userFound.name},\n\nClique no link abaixo para redefinir sua senha:\n\n${resetLink}\n\nEste link expira em 1 hora.\n\nAtenciosamente,\nEquipe SAPEMUA ONLINE`,
      };

      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      } catch (emailError) {
        console.error("Erro específico do EmailJS:", emailError);
        if (
          emailError.message?.includes("Failed to fetch") ||
          emailError.message?.includes("ERR_NAME_NOT_RESOLVED")
        ) {
          throw new Error(
            "Erro de conectividade. Verifique sua conexão com a internet e se o domínio api.emailjs.com está acessível.",
          );
        }
        throw emailError;
      }

      showSuccess(
        "Email de recuperação enviado! Abrindo sua caixa de entrada...",
      );

      // Abrir cliente de email baseado no provedor
      setTimeout(() => {
        const emailDomain = userFound.email.split("@")[1]?.toLowerCase();

        let emailUrl = "https://mail.google.com"; // Padrão Gmail

        if (
          emailDomain?.includes("outlook") ||
          emailDomain?.includes("hotmail") ||
          emailDomain?.includes("live")
        ) {
          emailUrl = "https://outlook.live.com";
        } else if (emailDomain?.includes("yahoo")) {
          emailUrl = "https://mail.yahoo.com";
        } else if (
          emailDomain?.includes("icloud") ||
          emailDomain?.includes("me.com")
        ) {
          emailUrl = "https://www.icloud.com/mail";
        }

        // Tentar abrir webmail, fallback para cliente nativo
        try {
          window.open(emailUrl, "_blank");
        } catch (error) {
          // Fallback para cliente de email nativo
          window.location.href = `mailto:${userFound.email}?subject=Verifique sua caixa de entrada`;
        }
      }, 1000);

      navigate("/auth/login");
    } catch (error) {
      console.error("Erro ao processar recuperação de senha:", error);
      showError("Erro ao enviar email de recuperação. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="bg-blue-700 w-full text-white rounded-full text-sm font-semibold flex items-center sm:p-[10px] p-[12px] justify-center disabled:opacity-50"
      >
        {isSubmitting ? <Loading size={25} /> : "Enviar Email de Recuperação"}
      </button>
    </form>
  );
}

export default ForgotPasswordForm;

import emailjs from "@emailjs/browser";
import { FRONTEND_URL } from "../utils/constants";

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export function buildFirstAccessLink(token) {
  return `${FRONTEND_URL}/primeiro-acesso/${encodeURIComponent(token)}`;
}

export async function sendFirstAccessEmail(user) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId =
    import.meta.env.VITE_EMAILJS_FIRST_ACCESS_TEMPLATE_ID ||
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Configuração EmailJS ausente no arquivo .env");
  }

  const firstAccessLink = buildFirstAccessLink(user.firstAccessToken);

  return emailjs.send(
    serviceId,
    templateId,
    {
      to: user.email,
      email: user.email,
      to_name: user.name,
      from_name: "SAPEMUA ONLINE",
      link: firstAccessLink,
      first_access_link: firstAccessLink,
      message: `Olá ${user.name},\n\nA sua conta foi criada no SAPEMUA ONLINE.\n\nClique no link abaixo para definir a sua palavra-passe:\n\n${firstAccessLink}\n\nEste link expira em 30 minutos.\n\nAtenciosamente,\nEquipe SAPEMUA ONLINE`,
    },
    publicKey,
  );
}

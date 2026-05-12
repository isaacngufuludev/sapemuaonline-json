// Exemplo de como funciona a detecção automática de provedor de email

const detectEmailProvider = (email) => {
  const domain = email.split("@")[1]?.toLowerCase();

  if (domain?.includes("gmail")) return "https://mail.google.com";
  if (
    domain?.includes("outlook") ||
    domain?.includes("hotmail") ||
    domain?.includes("live")
  )
    return "https://outlook.live.com";
  if (domain?.includes("yahoo")) return "https://mail.yahoo.com";
  if (domain?.includes("icloud") || domain?.includes("me.com"))
    return "https://www.icloud.com/mail";

  return "https://mail.google.com"; // Padrão
};

// Exemplos:
// detectEmailProvider('usuario@gmail.com') → 'https://mail.google.com'
// detectEmailProvider('usuario@outlook.com') → 'https://outlook.live.com'
// detectEmailProvider('usuario@yahoo.com') → 'https://mail.yahoo.com'

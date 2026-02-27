import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div>
      <h2 className="font-semibold text-2xl md:text-3xl md:mb-1">
        Iniciar Sessão
      </h2>
      <p className="md:text-sm text-xs  text-gray-600 dark:text-gray-300 mb-4 md:mb-5">
        Bem vindo de volta! Faça login para ter acesso a plataforma
      </p>
      <LoginForm />
      <Link className="md:text-sm text-xs text-blue-600">
        Esqueceste-te da tua palavra-passe?
      </Link>
    </div>
  );
}

export default Login;

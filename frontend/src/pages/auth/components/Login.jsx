import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div>
      <h2 className="font-semibold text-3xl mb-2">Iniciar sessão</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-7">
        Bem vindo de volta! Faça login para ter acesso a plataforma
      </p>
      <LoginForm />
      <Link className="text-sm text-blue-600">
        Esqueceste-te da tua palavra-passe?
      </Link>
    </div>
  );
}

export default Login;

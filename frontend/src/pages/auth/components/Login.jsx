import { Link } from "react-router-dom";
import LoginForm from "../../../components/shared/LoginForm";

function Login() {
  return (
    <div>
      {/* <div className="flex items-center mb-1">
        <img className="w-16" src="/imgs/logo.png" alt="" />
        <h1 className="font-semibold text-sm uppercase text-blue-700">
          sapemua online
        </h1>
      </div> */}
      <h2 className="font-semibold text-3xl ">Iniciar sessão</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-5">
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

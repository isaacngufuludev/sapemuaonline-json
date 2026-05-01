import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div>
      <h2 className="font-semibold text-xl md:text-[26px] md:mb-3">
        Iniciar Sessão
      </h2>
      <p className=" text-base  text-gray-600 dark:text-gray-300 mb-4 md:mb-7">
        Bem-vindo! Informe as tuas credenciais para acessar a platafoma
      </p>
      <LoginForm />
      <Link
        to="/auth/forgot-password"
        className="md:text-sm text-xs rounded-full text-center block dark:hover:bg-slate-800 hover:bg-gray-200  p-[12px]"
      >
        Esqueceu a tua palavra-passe?
      </Link>
    </div>
  );
}

export default Login;

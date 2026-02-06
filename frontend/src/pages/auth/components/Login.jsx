import { Link } from "react-router-dom";
import LoginForm from "../../../components/shared/LoginForm";

function Login() {
  return (
    <div>
      <h2 className="font-semibold text-2xl">Iniciar sessão</h2>
      <p className="text-sm mb-3">
        Bem vindo de volta! Faça login para ter acesso
      </p>
      <LoginForm />
      <Link className="text-sm">Esqueceste-te da tua palavra-passe?</Link>
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import Form from "../../components/layout/Form";
import Header from "../../components/layout/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="pt-32 container">
        <div className="max-w-[400px] px-5 py-8 mx-auto my-32 shadow-[0_0_20px_rgba(0,0,0,0.2)] rounded-xl">
          <h2 className="font-semibold text-2xl">Iniciar sessão</h2>
          <p className="text-sm mb-3">
            Bem vindo de volta! Faça login para ter acesso
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import Form from "../../components/layout/Form";
import Header from "../../components/layout/Header";

function Login() {
  return (
    <div>
      <Header />
      <div className="pt-32 container">
        <div className="max-w-[350px] px-5 py-8 mx-auto my-32 shadow-2xl rounded-xl  ">
          <h2 className="font-semibold text-2xl">Iniciar sessão</h2>
          <p className="text-xs mb-3">
            Bem vindo de volta! Faça login para ter acesso
          </p>
          <Form />
        </div>
        {/* temporario */}
        <div className="flex flex-col gap-1">
          <Link to="/area/admin">Admin</Link>
          <Link to="/area/student">Estudante</Link>
          <Link to="/area/teacher">Professor</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;

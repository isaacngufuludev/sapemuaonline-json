import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  return (
    <div>
      <h2 className="font-semibold text-xl md:text-[26px] md:mb-2">
        Encontre a sua conta
      </h2>
      <p className=" text-base  text-gray-600 dark:text-gray-300 mb-4 md:mb-3">
        Insira o seu email
      </p>
      <ForgotPasswordForm />
      <Link
        to="/auth/login"
        className="md:text-sm text-xs text-center block mt-2 dark:hover:bg-slate-800 p-[12px] rounded-full hover:bg-gray-200"
      >
        Iniciar Sessão
      </Link>
    </div>
  );
}

export default ForgotPassword;

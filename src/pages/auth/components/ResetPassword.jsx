import ResetPasswordForm from "./ResetPasswordForm";

function ResetPassword() {
  return (
    <div>
      <h2 className="font-semibold text-xl md:text-[26px] md:mb-2">
        Redefinir Palavra Passe
      </h2>
      <p className=" text-base  text-gray-600 dark:text-gray-300 mb-4 md:mb-3">
        Insira uma nova palavra passe
      </p>
      <ResetPasswordForm />
    </div>
  );
}

export default ResetPassword;

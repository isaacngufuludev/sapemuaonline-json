import ResetPasswordForm from "./ResetPasswordForm";

function ResetPassword() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900">
      <div className="lg:grid lg:grid-cols-[2.5fr_1.1fr] xl:grid-cols-[3fr_1.3fr] px-3 sm:px-0 max-w-[350px] lg:max-w-full lg:mx-0 mx-auto">
        {/* Imagem lateral - mesma do login */}
        <div
          className="hidden lg:block lg:min-h-screen lg:bg-cover lg:bg-center"
          style={{ backgroundImage: "url('/imgs/login.png')" }}
        ></div>

        {/* Conteúdo do formulário */}
        <div className="h-full lg:relative flex flex-col">
          <div className="flex h-full items-center translate-y-1/2 lg:translate-y-0">
            <div className="py-8 2xl:px-10 lg:px-4 lg:mx-auto w-full lg:my-auto">
              <h2 className="font-semibold text-xl md:text-[26px] md:mb-2">
                Redefinir Palavra Passe
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-3">
                Insira uma nova palavra passe
              </p>
              <ResetPasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;

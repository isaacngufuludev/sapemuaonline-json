import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/useToast";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Form() {
  const [email, setEmail] = useState("");
  // const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { user, login, isAuthenticated } = useAuth();
  const { showWarning } = useToast();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) showWarning("Preencha todos os campos por favor");
    if (email && password) {
      login({ email, password });
    }

    setEmail("");
    setPassword("");
    document.activeElement.blur();
  }

  useEffect(
    function () {
      if (!user) return;
      if (isAuthenticated && user.role === "admin") navigate("/area/admin");
      if (isAuthenticated && user.role === "teacher") navigate("/area/teacher");
      if (isAuthenticated && user.role === "student") navigate("/area/student");
    },
    [user, isAuthenticated, navigate]
  );

  return (
    <>
      <form className="flex flex-col gap-5" action="" onSubmit={handleSubmit}>
        <div>
          <label className="text-black text-sm dark:text-white" htmlFor="id">
            Email
          </label>
          <input
            id="id"
            className="focus:ring-1 dark:bg-gray-800 dark:text-white  dark:border-gray-700 ring-blue-700 pl-1 h-8 w-full border border-stone-300 focus:outline-none rounded-md text-sm"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <label
            className="text-black text-sm mb-8 dark:text-white"
            htmlFor="password"
          >
            Palavra-Passe
          </label>
          <input
            id="password"
            className="focus:ring-1 dark:text-white dark:bg-gray-800  dark:border-gray-700 ring-blue-700 pl-1 text-sm h-8 w-full border border-stone-300 focus:outline-none rounded-md "
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="absolute flex items-center right-2 top-8 "
            onClick={(e) => {
              e.preventDefault();
              setShowPassword((show) => !show);
            }}
          >
            {showPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        <button className="h-9 bg-blue-700 text-white rounded-md text-sm font-semibold">
          Login
        </button>
      </form>
    </>
  );
}

export default Form;

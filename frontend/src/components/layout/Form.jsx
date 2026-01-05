import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToast } from "../../hooks/useToast";

function Form() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, isAuthenticated } = useAuth();
  const { showWarning } = useToast();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!id || !password) showWarning("Preencha todos os campos por favor");
    if (id && password) {
      login({ id: +id, password });
    }
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
    <form className="flex flex-col gap-3" action="" onSubmit={handleSubmit}>
      <div>
        <label className="text-black text-xs dark:text-white" htmlFor="id">
          Código Interno
        </label>
        <input
          id="id"
          className="focus:ring-1 dark:bg-gray-800 dark:text-white  dark:border-gray-700 ring-blue-700 pl-1 h-7 w-full border border-stone-300 focus:outline-none rounded-md text-xs "
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label
          className="text-black text-xs mb-8 dark:text-white"
          htmlFor="password"
        >
          Palavra-Passe
        </label>
        <input
          id="password"
          className="focus:ring-1 dark:text-white dark:bg-gray-800  dark:border-gray-700 ring-blue-700 pl-1 text-inherit h-7 w-full border border-stone-300 focus:outline-none rounded-md text-xs "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="h-8 bg-blue-700 text-white rounded-md text-sm font-semibold">
        Login
      </button>
    </form>
  );
}

export default Form;

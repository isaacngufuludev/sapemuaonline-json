function Form() {
  return (
    <form className="flex flex-col gap-3" action="">
      <div>
        <label className="text-black text-xs dark:text-white" htmlFor="id">
          Código Interno
        </label>
        <input
          id="id"
          className="focus:ring-1 dark:bg-gray-800 dark:text-white  dark:border-gray-700 ring-blue-700 pl-1 h-7 w-full border border-stone-300 focus:outline-none rounded-md text-xs "
          type="text"
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
          className="focus:ring-1 dark:text-white   dark:bg-gray-800  dark:border-gray-700 ring-blue-700 pl-1 text-inherit h-7 w-full border border-stone-300 focus:outline-none rounded-md text-xs "
          type="password"
        />
      </div>
      <button className="h-8 bg-blue-700 text-white rounded-md text-sm font-semibold">
        Login
      </button>
    </form>
  );
}

export default Form;

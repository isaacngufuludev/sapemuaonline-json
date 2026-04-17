function AdminSelect({ children, id, value, onChange, type = "" }) {
  if (type === "many")
    return (
      <select
        id={id}
        multiple
        value={value}
        onChange={onChange}
        typeof={type}
        className="pl-2 p-[9px] w-full border dark:bg-gray-800  dark:border-gray-700 border-slate-200 focus:outline-none rounded-md text-sm dark:text-white"
      >
        {children}
      </select>
    );

  return (
    <select
      id={id}
      value={value}
      typeof={type}
      onChange={onChange}
      className="pl-2 p-[9px] w-full border dark:bg-gray-800  dark:border-gray-700 border-slate-200 focus:outline-none rounded-md text-sm dark:text-white"
    >
      {children}
    </select>
  );
}

export default AdminSelect;

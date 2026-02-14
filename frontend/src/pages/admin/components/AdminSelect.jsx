function AdminSelect({ children, id, value, onChange }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="pl-2 p-[9px] focus:ring-1 ring-blue-700 w-full border dark:bg-gray-800  dark:border-gray-700 border-slate-200 focus:outline-none rounded-md text-sm dark:text-white"
    >
      {children}
    </select>
  );
}

export default AdminSelect;

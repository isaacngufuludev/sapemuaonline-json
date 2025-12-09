function AdminSelect({ children, id }) {
  return (
    <select
      id={id}
      className="pl-1 h-7 focus:ring-1 ring-blue-700 w-full border dark:bg-gray-800  dark:border-gray-700 border-gray-200 focus:outline-none rounded-md text-xs dark:text-white"
    >
      {children}
    </select>
  );
}

export default AdminSelect;

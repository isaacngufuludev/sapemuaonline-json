function AdminInput({ type, id, value, onChange, ref, accept }) {
  const base =
    "pl-1 focus:ring-1 ring-blue-700 w-full focus:outline-none rounded-md text-xs dark:text-stone-900 dark:bg-gray-800 dark:text-white dark:border-gray-700";

  const styles = {
    text: base + " h-7 border border-gray-200",
    date: base + " h-7 border border-gray-200",
    email: base + " h-7 border border-gray-200",
    number: base + " h-7 border border-gray-200",
    description: base + " pb-12 border border-gray-200",
    file: base + " ",
  };

  return (
    <input
      className={styles[type]}
      type={type}
      id={id}
      ref={ref}
      accept={accept}
      value={value}
      onChange={onChange}
    />
  );
}

export default AdminInput;

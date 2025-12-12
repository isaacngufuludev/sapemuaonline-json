function AdminButton({ children, onClick, type }) {
  const base = " text-sm rounded-md dark:text-white flex items-center gap-1 ";

  const styles = {
    primary: base + " bg-blue-700 px-3 py-[6px] text-white",
    secondary:
      base +
      " text-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-800 px-3 py-[6px] border dark:border-gray-700",
    smallPrimary: base + " px-2 py-1 bg-blue-700 text-white",
    smallSecondary:
      base +
      " px-2 py-1 bg-gray-300 text-gray-700 border dark:bg-gray-800 dark:border-gray-700",
    turmas:
      base + " text-xs px-2 py-2 justify-center bg-blue-700 text-white w-full",
  };

  return (
    <button className={styles[type]} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default AdminButton;

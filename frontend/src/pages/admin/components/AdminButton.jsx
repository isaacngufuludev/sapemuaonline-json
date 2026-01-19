function AdminButton({ children, onClick, type, disabled = false }) {
  const base = " text-sm rounded-md dark:text-white flex items-center gap-1 ";

  const styles = {
    primary: base + " bg-blue-700 px-3 py-[6px] text-white disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      base +
      " text-gray-700 bg-gray-300 dark:bg-gray-800 text-gray-800 px-3 py-[6px] border dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
    smallPrimary: base + " px-2 py-1 bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed",
    smallSecondary:
      base +
      " px-2 py-1 bg-gray-300 text-gray-700 border dark:bg-gray-800 dark:border-gray-700 disabled:opacity-50 disabled:cursor-not-allowed",
    turmas:
      base + " text-xs px-2 py-2 justify-center bg-blue-700 text-white w-full disabled:opacity-50 disabled:cursor-not-allowed",
  };

  return (
    <button className={styles[type]} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default AdminButton;

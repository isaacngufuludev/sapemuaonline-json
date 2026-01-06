function BtnModal({ children, type, onClick }) {
  const base = " text-sm dark:text-white ";

  const styles = {
    smallPrimary:
      base +
      " px-2 py-1 bg-blue-700 text-white flex items-center gap-1 rounded-md ",
    smallSecondary:
      base +
      " px-2 py-1 bg-gray-300 text-gray-700 border dark:bg-gray-800 dark:border-gray-700 rounded-md flex items-center gap-1 ",
    remove:
      base + " px-2 py-3 bg-red-700 text-white w-full text-center rounded-full",
  };

  return (
    <button className={styles[type]} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default BtnModal;

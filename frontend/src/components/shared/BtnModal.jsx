function BtnModal({ children, type, onClick }) {
  const base = " text-sm rounded-md dark:text-white flex items-center gap-1 ";

  const styles = {
    smallPrimary: base + " px-2 py-1 bg-blue-700 text-white",
    smallSecondary:
      base +
      " px-2 py-1 bg-gray-300 text-gray-700 border dark:bg-gray-800 dark:border-gray-700",
  };

  return (
    <button className={styles[type]} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default BtnModal;

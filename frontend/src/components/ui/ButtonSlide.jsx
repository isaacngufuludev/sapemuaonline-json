function ButtonSlide({ children, type }) {
  const base =
    "absolute top-1/4 dark:bg-blue-700 bg-blue-300 px-3 py-2 rounded-full";

  const styles = {
    left: base + " left-14",
    right: base + " right-14",
  };

  return (
    <button type={type} className={styles[type]}>
      {children}
    </button>
  );
}

export default ButtonSlide;

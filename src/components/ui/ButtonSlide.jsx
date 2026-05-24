function ButtonSlide({ children, onClick, type }) {
  const base =
    "dark:bg-blue-700 bg-blue-300 py-[7px] rounded-full text-xl px-[10px] cursor-pointer absolute z-10 top-1/4";

  const styles = {
    left: base + " left-3 md:left-5 lg:left-10",
    right: base + " right-3  md:right-5  lg:right-12",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSlide;

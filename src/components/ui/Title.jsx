function Title({ children, type }) {
  const base =
    "text-lg sm:text-xl lg:text-2xl font-semibold mb-5 lg:mb-7 leading-6";

  const styles = {
    left: base + " text-left",
    center: base + " text-center  ",
  };

  return <h2 className={styles[type]}>{children}</h2>;
}

export default Title;

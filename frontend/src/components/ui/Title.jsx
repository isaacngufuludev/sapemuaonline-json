function Title({ children, type }) {
  const base = "text-xl  xl:text-2xl font-semibold mb-5 xl:mb-7";

  const styles = {
    left: base + " text-left",
    center: base + " text-center  ",
  };

  return <h2 className={styles[type]}>{children}</h2>;
}

export default Title;

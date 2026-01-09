function Subtitle({ children, type }) {
  const base =
    "xs:text-sm text-xs font-semibold tracking-wider uppercase text-blue-700";

  const styles = {
    left: base + " text-left",
    center: base + " text-center",
    gray: base + " text-center text-gray-600 normal-case dark:text-gray-400 ",
  };

  return <p className={`${type ? styles[type] : styles.center}`}>{children}</p>;
}

export default Subtitle;

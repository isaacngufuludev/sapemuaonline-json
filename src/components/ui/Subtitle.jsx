function Subtitle({ children, type }) {
  const base =
    "lg:text-sm text-xs mb-1 sm:mb-0 font-semibold tracking-wider uppercase text-blue-700";

  const styles = {
    left: base + " text-left",
    center: base + " text-center",
    gray: base + " text-center text-gray-600 normal-case dark:text-gray-400 ",
  };

  return <p className={`${type ? styles[type] : styles.center}`}>{children}</p>;
}

export default Subtitle;

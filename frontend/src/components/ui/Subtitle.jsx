function Subtitle({ children, type }) {
  const base = "text-sm font-semibold tracking-wider uppercase text-blue-700";

  const styles = {
    left: base + " text-left",
    center: base + " text-center",
    gray: base + " text-center text-gray-500",
  };

  return <p className={styles[type]}>{children}</p>;
}

export default Subtitle;

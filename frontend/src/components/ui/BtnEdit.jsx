function BtnEdit({ children, type, onClick }) {
  const base = "text-lg";

  const styles = {
    edit: base + " text-green-700",
    delete: base + " text-red-700",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default BtnEdit;

function AdminBtnEdit({ children, type }) {
  const base = "text-lg";

  const styles = {
    edit: base + " text-green-700",
    delete: base + " text-red-700",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default AdminBtnEdit;

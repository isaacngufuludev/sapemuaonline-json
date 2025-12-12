function AdminAddHeader({ children, type }) {
  const base =
    "bg-blue-200 dark:bg-gray-900 p-3 flex items-center gap-2 dark:border dark:border-gray-800";

  const styles = {
    turma: base + " justify-between",
  };

  return <div className={type ? styles[type] : base}>{children}</div>;
}

export default AdminAddHeader;

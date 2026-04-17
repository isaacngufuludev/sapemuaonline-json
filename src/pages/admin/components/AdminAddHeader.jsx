function AdminAddHeader({ children, type }) {
  const base =
    "flex flex-wrap items-center gap-2 bg-blue-200 p-3 dark:border dark:border-gray-800 dark:bg-gray-900";

  const styles = {
    turma: base + " justify-between",
  };

  return <div className={type ? styles[type] : base}>{children}</div>;
}

export default AdminAddHeader;

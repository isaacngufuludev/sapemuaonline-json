function AuthMain({ children, type = "default" }) {
  const base = "overflow-auto bg-slate-100 dark:bg-gray-900 ";

  const styles = {
    default: base + "p-10",
    noSpace: base,
  };

  return <main className={styles[type]}>{children}</main>;
}

export default AuthMain;

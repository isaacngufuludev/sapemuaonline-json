function AdminAddForm({ children, type }) {
  const base =
    " grid dark:bg-gray-800 items-center gap-x-4 gap-y-3 bg-white px-4 py-8";

  const styles = {
    four: base + " grid-cols-4",
    two: base + " grid-cols-2",
    three: base + " grid-cols-3",
  };

  return <form className={styles[type]}>{children}</form>;
}

export default AdminAddForm;

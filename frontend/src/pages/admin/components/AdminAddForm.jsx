function AdminAddForm({ children, type, onSubmit }) {
  const base =
    "grid items-center gap-x-4 gap-y-3 bg-white px-3 py-6 dark:bg-gray-800 sm:px-4 sm:py-8";

  const styles = {
    four: base + " grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
    two: base + " grid-cols-1 sm:grid-cols-2",
    three: base + " grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    none: base + " grid-cols-1",
  };

  return (
    <div className={styles[type]} onSubmit={onSubmit}>
      {children}
    </div>
  );
}

export default AdminAddForm;

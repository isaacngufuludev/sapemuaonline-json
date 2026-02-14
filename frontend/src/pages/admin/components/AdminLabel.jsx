function AdminLabel({ children, htmlFor }) {
  return (
    <label className="text-xs block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default AdminLabel;

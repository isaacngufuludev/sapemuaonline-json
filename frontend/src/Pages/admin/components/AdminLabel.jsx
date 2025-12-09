function AdminLabel({ children, htmlFor }) {
  return (
    <label className="text-xs" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default AdminLabel;

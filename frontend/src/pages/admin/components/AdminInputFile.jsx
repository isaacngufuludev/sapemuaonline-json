function AdminInputFile({ children, id }) {
  return (
    <input type="file" className="" id={id}>
      {children}
    </input>
  );
}

export default AdminInputFile;

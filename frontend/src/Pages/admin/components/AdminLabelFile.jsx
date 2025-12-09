function AdminLabelFile({ children, htmlFor }) {
  return (
    <div className="flex items-center gap-1">
      <label
        className="bg-blue-700 text-white px-3 py-2 rounded-md cursor-pointer"
        htmlFor={htmlFor}
      >
        {children}
      </label>
      <p>Nenhum arquivo selecionado.</p>
    </div>
  );
}

export default AdminLabelFile;

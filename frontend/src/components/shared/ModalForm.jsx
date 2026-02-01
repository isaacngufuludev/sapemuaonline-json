function ModalForm({ children, onSubmit, className = "" }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default ModalForm;

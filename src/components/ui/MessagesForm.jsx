function MessagesForm({ children, onSubmit }) {
  return (
    <form className="flex sticky items-center gap-2" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default MessagesForm;

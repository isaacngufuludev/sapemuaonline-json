function ModalForm({ children, onSubmit }) {
  return <form onSubmit={onSubmit}>{children}</form>;
}

export default ModalForm;

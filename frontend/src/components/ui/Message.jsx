function Message({ message }) {
  return (
    <p className="uppercase text-xl bg-none text-center" message={message}>
      {message}
    </p>
  );
}

export default Message;

function Message({ message }) {
  return (
    <p className="uppercase text-xl text-center" message={message}>
      {message}
    </p>
  );
}

export default Message;

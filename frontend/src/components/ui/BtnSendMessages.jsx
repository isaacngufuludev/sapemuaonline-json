import { IoSend } from "react-icons/io5";

function BtnSendMessages({ onClick }) {
  return (
    <button
      type="submit"
      className="text-blue-700 text-2xl md:text-3xl hover:text-blue-800 transition-colors"
      onClick={onClick}
    >
      <IoSend />
    </button>
  );
}

export default BtnSendMessages;

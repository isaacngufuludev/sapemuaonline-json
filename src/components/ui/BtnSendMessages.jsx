import { IoSend } from "react-icons/io5";

function BtnSendMessages({ disabled = false }) {
  return (
    <button
      type="submit"
      className="text-blue-700 text-2xl md:text-3xl hover:text-blue-800 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
    >
      <IoSend />
    </button>
  );
}

export default BtnSendMessages;

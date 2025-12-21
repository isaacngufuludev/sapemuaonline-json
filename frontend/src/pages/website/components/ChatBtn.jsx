import { BsChatFill } from "react-icons/bs";
import { useModal } from "../../../contexts/ModalContext";

function ChatBtn() {
  const { toggleChatBoot } = useModal();

  return (
    <button
      onClick={toggleChatBoot}
      className="text-left bg-blue-700 text-white p-4 z-10 rounded-full text-xl fixed right-7 top-[90%] shadow-2xl cursor-pointer "
    >
      <BsChatFill />
    </button>
  );
}

export default ChatBtn;

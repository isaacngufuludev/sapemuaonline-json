import { BsChatFill } from "react-icons/bs";
import { useModal } from "../../../contexts/ModalContext";

function ChatBtn() {
  const { toggleChatBoot } = useModal();

  return (
    <button
      onClick={toggleChatBoot}
      className="group text-left bg-blue-700 p-3 text-lg text-white xl:p-4 z-30 rounded-full xl:text-xl fixed right-4 bottom-4 md:right-7 md:bottom-6 shadow-2xl cursor-pointer"
      aria-label="Abrir chat"
    >
      <span className="absolute inset-0 rounded-full bg-blue-700 opacity-75 animate-ping" />
      <span className="relative block animate-bounce [animation-duration:1.8s]">
        <BsChatFill />
      </span>
    </button>
  );
}

export default ChatBtn;

import { BsChatFill } from "react-icons/bs";
import { useModal } from "../../../contexts/ModalContext";

function ChatBtn() {
  const { toggleChatBoot } = useModal();

  return (
    <button
      onClick={toggleChatBoot}
      className="text-left bg-blue-700 p-3 text-lg text-white xl:p-4 z-10 top-[70%]  right-32 rounded-full xl:text-xl fixed xl:right-7 xl:top-[90%] shadow-2xl cursor-pointer "
    >
      <BsChatFill />
    </button>
  );
}

export default ChatBtn;

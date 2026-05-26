import { BsX } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { useModal } from "../../../contexts/ModalContext";

function ChatHeader({ messageList }) {
  const { toggle } = useModal();

  return (
    <header className="flex items-center justify-between h-8 sm:h-9 shrink-0">
      <div className="flex items-center sm:text-xl  text-base gap-1">
        <img src="/imgs/logo.png" className="w-7" />
        <p className="font-semibold">Sapemua Online</p>
      </div>
      <div className="flex items-center text-2xl gap-2">
        <button onClick={() => messageList([])}>
          <p>
            <MdRefresh />
          </p>
        </button>
        <button onClick={toggle}>
          <p>
            <BsX />
          </p>
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;

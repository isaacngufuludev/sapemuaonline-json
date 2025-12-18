import { BsX } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";

function ChatHeader() {
  return (
    <header className="flex items-center justify-between h-8">
      <div className="flex items-center text-xl gap-1">
        <img src="/imgs/logo.png" className="w-7" />
        <p className="font-semibold">Sapemua Online</p>
      </div>
      <div className="flex items-center text-xl gap-3">
        <button>
          <p>
            <MdRefresh style={{ transform: "rotate(180deg)" }} />
          </p>
        </button>
        <button>
          <p className="text-2xl">
            <BsX />
          </p>
        </button>
      </div>
    </header>
  );
}

export default ChatHeader;

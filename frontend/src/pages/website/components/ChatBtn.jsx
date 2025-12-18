import { BsChatFill } from "react-icons/bs";

function ChatBtn() {
  return (
    <button className="text-left bg-blue-700 text-white p-4 rounded-full text-xl fixed right-7 top-[90%] shadow-2xl cursor-pointer ">
      <BsChatFill />
    </button>
  );
}

export default ChatBtn;

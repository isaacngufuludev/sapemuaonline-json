import { BsChat, BsChatFill } from "react-icons/bs";

function ChatMessageInfo({ message = "" }) {
  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="flex items-center text-2xl gap-2">
        <p className="text-blue-700 text-3xl">
          <BsChatFill />
        </p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessageInfo;

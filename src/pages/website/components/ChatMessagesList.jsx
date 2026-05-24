import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

const ChatMessageList = ({ mensagens, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [mensagens, loading]);

  return (
    <ul className="flex-1 min-h-0 overflow-y-auto scrollbar-none p-2 space-y-4 no-scrollbar">
      {mensagens.map((item, index) => (
        <ChatMessage key={`${item.id}-${index}`} item={item} />
      ))}

      {loading && (
        <li className="flex items-center gap-2 rounded-xl dark:bg-gray-800 bg-slate-100/80 px-4 py-3 text-sm text-slate-700 shadow-sm shadow-slate-200 dark:shadow-gray-800 w-fit max-w-[60%]">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-pulse" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-pulse delay-100" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-pulse delay-200" />
        </li>
      )}

      <div ref={messagesEndRef} />
    </ul>
  );
};

export default ChatMessageList;

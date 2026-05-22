import ChatMessage from "./ChatMessage";
import { useEffect, useRef } from "react";

const ChatMessageList = ({
  mensagens,
  loading,
}) => {

  const messagesEndRef = useRef(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [mensagens, loading]);

  return (

    <ul className="flex-1 min-h-0 overflow-y-auto scrollbar-none p-2 space-y-4 no-scrollbar">

      {mensagens.map((item, index) => (

        <ChatMessage
          key={`${item.id}-${index}`}
          item={item}
        />

      ))}

      {loading && (

        <ChatMessage
          item={{
            text: "Digitando...",
            remetente: "bot",
          }}
        />

      )}

      <div ref={messagesEndRef} />

    </ul>

  );

};

export default ChatMessageList;
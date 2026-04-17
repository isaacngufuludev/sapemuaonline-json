import MessagesForm from "../../../components/ui/MessagesForm";
import InputMessages from "../../../components/ui/InputMessages";
import BtnSendMessages from "../../../components/ui/BtnSendMessages";
import { useState } from "react";

function ChatForm() {
  const [chatMessage, setChatMessage] = useState("");
  console.log(chatMessage);

  function handleSubmit(e) {
    e.preventDefault();

    setChatMessage("");
  }

  return (
    <div className="pt-2 sm:pt-3 border-t border-slate-200 dark:border-gray-700 shrink-0">
      <MessagesForm>
        <InputMessages
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <BtnSendMessages onClick={handleSubmit} />
      </MessagesForm>
    </div>
  );
}
export default ChatForm;

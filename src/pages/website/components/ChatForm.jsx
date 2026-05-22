import MessagesForm from "../../../components/ui/MessagesForm";
import InputMessages from "../../../components/ui/InputMessages";
import BtnSendMessages from "../../../components/ui/BtnSendMessages";

import { useState } from "react";

function ChatForm({ enviarMensagem }) {

  const [chatMessage, setChatMessage] = useState("");

  function handleSubmit(e) {

    e.preventDefault();
    
    console.log("enviando");

    enviarMensagem(chatMessage);

    setChatMessage("");

  }

  return (
    <div className="pt-2 sm:pt-3 border-t border-slate-200 dark:border-gray-700 shrink-0">

      <MessagesForm onSubmit={handleSubmit}>

        <InputMessages
          value={chatMessage}
          onChange={(e) =>
            setChatMessage(e.target.value)
          }
        />

        <BtnSendMessages />

      </MessagesForm>

    </div>
  );

}

export default ChatForm;

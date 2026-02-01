import { useState } from "react";
import BtnSendMessages from "../../../../components/ui/BtnSendMessages";
import InputMessages from "../../../../components/ui/InputMessages";
import MessagesForm from "../../../../components/ui/MessagesForm";

function TeacherChatForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Enviando mensagem:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <MessagesForm onSubmit={handleSubmit}>
      <InputMessages
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <BtnSendMessages onClick={handleSubmit} />
    </MessagesForm>
  );
}

export default TeacherChatForm;

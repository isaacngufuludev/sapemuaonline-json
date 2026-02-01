import MessagesForm from "../../../components/ui/MessagesForm";
import InputMessages from "../../../components/ui/InputMessages";
import BtnSendMessages from "../../../components/ui/BtnSendMessages";

function ChatForm() {
  return (
    <MessagesForm>
      <InputMessages />
      <BtnSendMessages />
    </MessagesForm>
  );
}
export default ChatForm;

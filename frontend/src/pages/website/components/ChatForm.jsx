import MessagesForm from "../../../components/ui/MessagesForm";
import InputMessages from "../../../components/ui/InputMessages";
import BtnSendMessages from "../../../components/ui/BtnSendMessages";

function ChatForm() {
  return (
    <div className="pt-2 sm:pt-3 border-t border-slate-200 dark:border-gray-700 shrink-0">
      <MessagesForm>
        <InputMessages />
        <BtnSendMessages />
      </MessagesForm>
    </div>
  );
}
export default ChatForm;

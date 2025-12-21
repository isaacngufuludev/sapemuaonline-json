import Header from "../../../components/layout/Header";
import ListaMensagens from "./ListaMensagens";
import ChatHeader from "../../admin/components/ChatHeader";
import ChatForm from "./ChatForm";

function ChatBoot() {
  return (
    <div className="container z-10 bg-white dark:bg-gray-900 mx-auto max-w-[450px] p-4 pb-7 fixed right-7 top-[20%] rounded-2xl border-[0.1px] border-stone-300 dark:border-gray-700 ">
      <ChatHeader />
      <ListaMensagens />
      <ChatForm />
    </div>
  );
}

export default ChatBoot;

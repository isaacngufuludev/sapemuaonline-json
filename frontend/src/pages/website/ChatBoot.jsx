import Header from "../../components/layout/Header";
import ListaMensagens from "./components/ListaMensagens";
import ChatHeader from "../admin/components/ChatHeader";
import ChatForm from "./components/ChatForm";

function ChatBoot() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <div className="container mx-auto max-w-[500px] p-4 pb-7 rounded-2xl border-[0.1px] border-stone-300 dark:border-gray-700 ">
          <ChatHeader />
          <ListaMensagens />
          <ChatForm />
        </div>
      </div>
    </>
  );
}

export default ChatBoot;

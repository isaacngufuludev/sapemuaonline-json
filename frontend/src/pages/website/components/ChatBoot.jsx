import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import ChatMessageList from "./ChatMessagesList";

function ChatBoot() {
  return (
    <div className="container z-30 bg-white right-2  dark:bg-gray-900 max-w-[400px] lg:max-w-[450px] p-4 pb-7 fixed sm:right-7 top-[10%] rounded-2xl border-[0.1px] border-stone-300 dark:border-gray-700 ">
      <ChatHeader />
      <ChatMessageList />
      <ChatForm />
    </div>
  );
}

export default ChatBoot;

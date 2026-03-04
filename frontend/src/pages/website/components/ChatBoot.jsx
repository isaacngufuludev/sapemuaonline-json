import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import ChatMessageList from "./ChatMessagesList";

function ChatBoot() {
  return (
    <div className="fixed z-30 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-7 top-2 bottom-2 md:top-[10%] md:bottom-24 w-[calc(100vw-1rem)] md:w-full max-w-[400px] lg:max-w-[450px] p-3 sm:p-4 bg-white dark:bg-gray-900 rounded-2xl border-[0.1px] border-stone-300 dark:border-gray-700 flex flex-col overflow-hidden">
      <ChatHeader />
      <ChatMessageList />
      <ChatForm />
    </div>
  );
}

export default ChatBoot;

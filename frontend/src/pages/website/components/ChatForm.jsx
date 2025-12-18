import { IoSend } from "react-icons/io5";

function ChatForm() {
  return (
    <form className="flex items-center gap-2">
      <input
        id="id"
        className="focus:ring-1 dark:bg-gray-800 dark:text-white h-10 text-sm  dark:border-gray-700 ring-blue-700 pl-2  w-full border border-stone-300 focus:outline-none rounded-full "
        type="text"
        placeholder="Digite a sua mensagem"
      />
      <button className="text-blue-700 text-3xl">
        <IoSend />
      </button>
    </form>
  );
}
export default ChatForm;

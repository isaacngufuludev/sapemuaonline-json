import ReactMarkdown from "react-markdown";

const ChatMessage = ({ item }) => {
  const isBot = item.remetente === "bot";

  return (
    <li className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md px-4 py-3 rounded-2xl cursor-pointer
        ${
          isBot
            ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
            : "bg-blue-700 text-white"
        }
        `}
      >
        <div
          className={`text-sm leading-relaxed break-words prose prose-sm max-w-none
          ${
            isBot
              ? "dark:prose-invert"
              : "prose-headings:text-white prose-p:text-white prose-strong:text-white prose-li:text-white prose-code:text-white"
          }
          `}
        >
          <ReactMarkdown>{item.text}</ReactMarkdown>
        </div>
      </div>
    </li>
  );
};

export default ChatMessage;

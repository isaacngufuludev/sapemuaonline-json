import ReactMarkdown from "react-markdown";

const ChatMessage = ({ item }) => {

  const isBot = item.remetente === "bot";

  return (

    <li className={`flex ${isBot ? `justify-start` : `justify-end`}`}>

      <div
        className={`max-w-xs sm:max-w-sm md:max-w-md px-4 py-3 rounded-2xl cursor-pointer
        ${
          isBot
            ? `bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white`
            : `text-white bg-blue-700`
        }
        `}
      >

        <div className="text-sm leading-relaxed break-words prose prose-sm dark:prose-invert max-w-none">

          <ReactMarkdown>
            {item.text}
          </ReactMarkdown>

        </div>

      </div>

    </li>

  );

};

export default ChatMessage;

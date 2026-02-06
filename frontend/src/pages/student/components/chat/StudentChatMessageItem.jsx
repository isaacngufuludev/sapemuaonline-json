import { FiUser } from "react-icons/fi";

function StudentChatMessageItem({ item }) {
  return (
    <li
      className={`flex gap-2 ${item.isMine ? "justify-end" : "justify-start"}`}
    >
      {!item.isMine && (
        <div className="flex items-end">
          <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full text-lg">
            <FiUser />
          </div>
        </div>
      )}

      <div>
        {!item.isMine && (
          <p className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
            {item.sender}
          </p>
        )}
        <div
          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
            item.isMine
              ? "bg-blue-700 text-white"
              : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
          }`}
        >
          <p className="text-sm">{item.message}</p>
          <p
            className={`text-xs mt-1 ${
              item.isMine ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.time}
          </p>
        </div>
      </div>
    </li>
  );
}

export default StudentChatMessageItem;

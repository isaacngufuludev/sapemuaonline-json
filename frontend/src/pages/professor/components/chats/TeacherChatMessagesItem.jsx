import { FiUser } from "react-icons/fi";

function TeacherChatMessagesItem({ item, turmaId, currUser }) {
  const uiCondition = currUser.turmasId.includes(turmaId);

  return (
    <li
      className={`flex gap-2 ${uiCondition ? "justify-end" : "justify-start"}`}
    >
      {!uiCondition && (
        <div className="flex items-end">
          <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full text-lg">
            <FiUser />
          </div>
        </div>
      )}

      <div>
        {uiCondition && (
          <p className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
            {item.sender}
          </p>
        )}
        <div
          className={`max-w-[75%] px-4 py-3 rounded-2xl ${
            uiCondition
              ? "bg-blue-700 text-white"
              : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
          }`}
        >
          <p className="text-sm">{item.message}</p>
          <p
            className={`text-xs mt-1 ${
              uiCondition ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.time}
          </p>
        </div>
      </div>
    </li>
  );
}

export default TeacherChatMessagesItem;

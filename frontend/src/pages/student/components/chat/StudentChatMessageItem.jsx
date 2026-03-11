import { FiUser } from "react-icons/fi";
import { formateDate } from "../../../../utils/helpers";

function StudentChatMessageItem({ item, currUser }) {
  const isMine = item.senderId === currUser?.id;
  const timeLabel = item.time ?? formateDate(item.createdAt, "relative");

  return (
    <li className={`flex gap-2 ${isMine ? "justify-end" : "justify-start"}`}>
      {!isMine && (
        <div className="flex items-end">
          <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full text-lg">
            <FiUser />
          </div>
        </div>
      )}

      <div
        className={`flex max-w-[75%] flex-col ${
          isMine ? "items-end" : "items-start"
        }`}
      >
        {!isMine && (
          <p className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
            {item.sender}
          </p>
        )}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isMine
              ? "bg-blue-700 text-white"
              : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
          }`}
        >
          <p className="text-sm">{item.message}</p>
          {timeLabel && (
            <p
              className={`text-xs mt-1 ${
                isMine ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {timeLabel}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default StudentChatMessageItem;

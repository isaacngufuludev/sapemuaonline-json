function StudentChatItem({ item }) {
  return (
    <li className="px-5 py-4 hover:bg-blue-200 duration-300 dark:hover:bg-gray-800 cursor-pointer transition-colors">
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">
          {item.name}
        </h4>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {item.time}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
          {item.lastMessage}
        </p>
        {item.unread > 0 && (
          <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full mt-1">
            {item.unread}
          </span>
        )}
      </div>
    </li>
  );
}

export default StudentChatItem;

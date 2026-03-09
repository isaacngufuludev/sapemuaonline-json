import { useLocation, useNavigate } from "react-router-dom";

// function TeacherChatItem({ item, isSelected, onClick }) {
function TeacherChatItem({ item, onClick }) {
  const period = item?.period ?? "";
  const periodInitial = Array.isArray(period) ? period[0] : String(period)[0];
  const navigate = useNavigate();
  const currentId = useLocation().hash;
  const isCurrent = currentId.split("#").at(1) === item.id;

  return (
    <li
      className={`px-5 py-4 duration-300 cursor-pointer transition-colors ${
        isCurrent
          ? "bg-blue-200 dark:bg-gray-800"
          : "hover:bg-blue-200 dark:hover:bg-gray-800"
      }`}
      onClick={() => {
        navigate(`#${item.id}`);
        onClick();
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">
          {item.course} {item.classYear}{" "}
          {item.turmaCategory === "Unica"
            ? item.turmaCategory[0]
            : item.turmaCategory}
          {periodInitial}
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

export default TeacherChatItem;

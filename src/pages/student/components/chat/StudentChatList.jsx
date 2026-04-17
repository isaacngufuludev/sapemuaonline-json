import StudentChatItem from "./StudentChatItem";

function StudentChatList({ conversations, onSelectConversation }) {
  return (
    <div className="dark:bg-gray-900 bg-gray-100 h-full w-full flex flex-col overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Mensagens</h1>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Turma Vinculada
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {conversations.map((item) => (
            <StudentChatItem
              key={item.id}
              item={item}
              onSelectConversation={onSelectConversation}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentChatList;

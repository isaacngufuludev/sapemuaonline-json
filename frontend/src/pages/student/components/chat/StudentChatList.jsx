import StudentChatItem from "./StudentChatItem";

const conversations = [
  {
    id: 1,
    name: "Informática 11-BM",
    lastMessage: "Bom dia professor!",
    time: "10:30",
    unread: 2,
  },
];

function StudentChatList() {
  return (
    <div className="fixed dark:bg-gray-900 bg-gray-100 left-[230px] top-[65px] w-[300px] lg:w-[400px] h-[calc(100dvh-65px)] border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-40">
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
            <StudentChatItem item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StudentChatList;

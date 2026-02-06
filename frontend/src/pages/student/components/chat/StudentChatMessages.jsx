import StudentChatHeader from "./StudentChatHeader";
import StudentChatMessagesList from "./StudentChatMessagesList";
import StudentChatFrom from "./StudentChatForm";

function StudentChatMessages() {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col h-full">
      <div className="sticky top-0 z-10">
        <StudentChatHeader />
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <StudentChatMessagesList />
      </div>

      <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-10">
        <StudentChatFrom />
      </div>
    </div>
  );
}

export default StudentChatMessages;

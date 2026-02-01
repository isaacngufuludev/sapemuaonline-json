import TeacherChatForm from "./TeacherChatForm";
import TeacherChatMessagesList from "./TeacherChatMessagesList";
import TeacherChatHeader from "./TeacherChatHeader";

function TeacherChatMessages() {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col h-full">
      {/* Header fixo no topo */}
      <div className="sticky top-0 z-10">
        <TeacherChatHeader />
      </div>

      {/* Área de mensagens com scroll */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <TeacherChatMessagesList />
      </div>

      {/* Input fixo na parte inferior */}
      <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-10">
        <TeacherChatForm />
      </div>
    </div>
  );
}

export default TeacherChatMessages;

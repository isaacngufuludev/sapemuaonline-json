import { useRef } from "react";
import TeacherChatForm from "./TeacherChatForm";
import TeacherChatMessagesList from "./TeacherChatMessagesList";
import TeacherChatHeader from "./TeacherChatHeader";

function TeacherChatMessages({ conversation, onBack, showBackButton }) {
  const messagesContainerRef = useRef(null);

  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col h-full w-full overflow-hidden relative">
      <div className="sticky top-0 z-10">
        <TeacherChatHeader
          conversation={conversation}
          showBackButton={showBackButton}
          onBack={onBack}
        />
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <TeacherChatMessagesList
          conversation={conversation}
          containerRef={messagesContainerRef}
        />
      </div>

      <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-10">
        <TeacherChatForm />
      </div>
    </div>
  );
}

export default TeacherChatMessages;

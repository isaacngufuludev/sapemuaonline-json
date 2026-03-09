import { useRef } from "react";
import StudentChatHeader from "./StudentChatHeader";
import StudentChatMessagesList from "./StudentChatMessagesList";
import StudentChatFrom from "./StudentChatForm";

function StudentChatMessages({ conversation, onBack, showBackButton }) {
  const messagesContainerRef = useRef(null);

  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col h-full w-full overflow-hidden">
      <div className="sticky top-0 z-10">
        <StudentChatHeader
          // conversation={conversation}
          showBackButton={showBackButton}
          onBack={onBack}
        />
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4 md:px-4"
      >
        <StudentChatMessagesList
          // conversation={conversation}
          containerRef={messagesContainerRef}
        />
      </div>

      <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 z-10">
        <StudentChatFrom />
      </div>
    </div>
  );
}

export default StudentChatMessages;

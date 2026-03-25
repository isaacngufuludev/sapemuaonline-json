import { useEffect, useState } from "react";
import StudentChatList from "./StudentChatList";
import StudentChat from "./StudentChat";
import StudentChatMessages from "./StudentChatMessages";
import { useStudentConversations } from "../../../../hooks/useStudentConversations";
import { useLocation } from "react-router-dom";
import ChatMessageInfo from "../../../../components/ui/ChatMessageInfo";

function StudentChatLayout() {
  const { studentChats } = useStudentConversations();
  const conversations = studentChats;
  const currentId = useLocation().hash;
  const hashId = currentId.startsWith("#") ? currentId.slice(1) : null;

  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const selectedConversationId =
    hashId ?? conversations[0]?.id ?? null;

  const selectedConversation =
    conversations.find((item) => item.id === selectedConversationId) ?? null;

  const handleSelectConversation = (conversationId) => {
    setIsMobileChatOpen(true);
  };

  const handleBackToList = () => {
    setIsMobileChatOpen(false);
  };

  useEffect(() => {
    setIsMobileChatOpen(Boolean(hashId));
  }, [hashId]);

  return (
    <StudentChat isMobileChatOpen={isMobileChatOpen}>
      <StudentChatList
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
      />
      {currentId ? (
        <StudentChatMessages
          conversation={selectedConversation}
          showBackButton={isMobileChatOpen}
          onBack={handleBackToList}
        />
      ) : (
        <ChatMessageInfo message="Selecione a tua turma no menu esquerdo para ver as mensagens" />
      )}
    </StudentChat>
  );
}

export default StudentChatLayout;

import { useState } from "react";
import TeacherChats from "./TeacherChats";
import TeacherChatsList from "./TeacherChatList";
import TeacherChatMessages from "./TeacherChatMessages";
import { useTeacherConversations } from "../../../../hooks/useTeacherConversations";
import { useLocation } from "react-router-dom";
import ChatMessageInfo from "../../../../components/ui/ChatMessageInfo";

function TeacherChatLayout() {
  const { teacherChats } = useTeacherConversations();
  const conversations = teacherChats;
  const currentId = useLocation().hash;
  const hashId = currentId.startsWith("#") ? currentId.slice(1) : null;

  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const selectedConversationId = hashId ?? conversations[0]?.id ?? null;

  const selectedConversation =
    conversations.find((item) => item.id === selectedConversationId) ?? null;

  function handleSelectConversation(conversationId) {
    setIsMobileChatOpen(true);
  }

  const handleBackToList = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <TeacherChats isMobileChatOpen={isMobileChatOpen}>
      <TeacherChatsList
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
      />
      {currentId ? (
        <TeacherChatMessages
          conversation={selectedConversation}
          showBackButton={isMobileChatOpen}
          onBack={handleBackToList}
        />
      ) : (
        <ChatMessageInfo message="Selecione uma das turma do menu esquerdo para ver as mensagens" />
      )}
    </TeacherChats>
  );
}

export default TeacherChatLayout;

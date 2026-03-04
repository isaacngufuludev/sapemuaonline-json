import { useState } from "react";
import StudentChatList from "./StudentChatList"
import StudentChat from "./StudentChat"
import StudentChatMessages from "./StudentChatMessages"

const conversations = [
  {
    id: 1,
    name: "Informática 11-BM",
    subtitle: "25 online",
    lastMessage: "Bom dia professor!",
    time: "10:30",
    unread: 2,
  },
];

function StudentChatLayout() {
  const [selectedConversationId, setSelectedConversationId] = useState(
    conversations[0]?.id ?? null
  );
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const selectedConversation =
    conversations.find((item) => item.id === selectedConversationId) ?? null;

  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
    setIsMobileChatOpen(true);
  };

  const handleBackToList = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <StudentChat isMobileChatOpen={isMobileChatOpen}>
      <StudentChatList
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
      />
      <StudentChatMessages
        conversation={selectedConversation}
        showBackButton={isMobileChatOpen}
        onBack={handleBackToList}
      />
    </StudentChat>
  ) 
}

export default StudentChatLayout

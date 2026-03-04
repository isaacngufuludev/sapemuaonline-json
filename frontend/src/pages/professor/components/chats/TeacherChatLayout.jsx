import { useState } from "react";
import TeacherChats from "./TeacherChats";
import TeacherChatsList from "./TeacherChatList";
import TeacherChatMessages from "./TeacherChatMessages";

const conversations = [
  {
    id: 1,
    name: "Informática 11-BM",
    subtitle: "25 alunos online",
    lastMessage: "Bom dia professor!",
    time: "10:30",
    unread: 2,
  },
  {
    id: 2,
    name: "Informática 12-BM",
    subtitle: "19 alunos online",
    lastMessage: "Sobre o trabalho...",
    time: "09:15",
    unread: 0,
  },
  {
    id: 3,
    name: "Eletrônica 11-BM",
    subtitle: "14 alunos online",
    lastMessage: "Quando é a prova?",
    time: "Ontem",
    unread: 1,
  },
  {
    id: 4,
    name: "Gestão 10-BM",
    subtitle: "11 alunos online",
    lastMessage: "Obrigado professor",
    time: "Seg",
    unread: 0,
  },
  {
    id: 5,
    name: "Contabilidade 9-A",
    subtitle: "20 alunos online",
    lastMessage: "Dúvida no exercício 5",
    time: "Ter",
    unread: 3,
  },
  {
    id: 6,
    name: "Matemática 10-B",
    subtitle: "17 alunos online",
    lastMessage: "Fórmula da derivada",
    time: "Seg",
    unread: 0,
  },
];

function TeacherChatLayout() {
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
    <TeacherChats isMobileChatOpen={isMobileChatOpen}>
      <TeacherChatsList
        conversations={conversations}
        selectedConversationId={selectedConversationId}
        onSelectConversation={handleSelectConversation}
      />
      <TeacherChatMessages
        conversation={selectedConversation}
        showBackButton={isMobileChatOpen}
        onBack={handleBackToList}
      />
    </TeacherChats>
  );
}

export default TeacherChatLayout;

import { useEffect } from "react";
import { useMessages } from "../../../../hooks/useMessages";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import StudentChatMessageItem from "./StudentChatMessageItem";

function StudentChatMessagesList({ containerRef }) {
  const { user } = useAuth();
  const { messages } = useMessages();
  const turmaId = useLocation().hash.slice(1);
  const turmaMessages = messages.filter(
    (message) => message.turmaId === turmaId,
  );

  useEffect(() => {
    if (!containerRef?.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [containerRef]);

  return (
    <ul className="space-y-6">
      {turmaMessages.map((item) => (
        <StudentChatMessageItem key={item.id} item={item} currUser={user} />
      ))}
    </ul>
  );
}

export default StudentChatMessagesList;

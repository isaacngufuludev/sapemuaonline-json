import TeacherChatMessagesItem from "./TeacherChatMessagesItem";
import { useEffect } from "react";
import { useMessages } from "../../../../hooks/useMessages";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useModal } from "../../../../contexts/ModalContext";
import SenderDetail from "../../../../components/shared/SenderDetail";

function TeacherChatMessagesList({ containerRef }) {
  const { messages } = useMessages();
  const { user } = useAuth();
  const { isSenderDetail, edited } = useModal();
  const turmaId = useLocation().hash.slice(1);
  const turmaMessages = messages.filter(
    (message) => message.turmaId === turmaId,
  );

  useEffect(() => {
    if (!containerRef?.current) return;
    const el = containerRef.current;
    // ensure we scroll after DOM updates; use requestAnimationFrame for reliability
    requestAnimationFrame(() => {
      if (!el) return;
      if (typeof el.scrollTo === "function") {
        el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
      } else {
        el.scrollTop = el.scrollHeight;
      }
    });
  }, [containerRef, turmaMessages.length]);

  return (
    <div className="  bg-center bg-no-repeat py-4  px-3 md:px-4">
      <ul className="space-y-6">
        {turmaMessages.map((item) => (
          <TeacherChatMessagesItem key={item.id} item={item} currUser={user} />
        ))}
      </ul>

      {isSenderDetail && <SenderDetail selectedSender={edited} />}
    </div>
  );
}

export default TeacherChatMessagesList;

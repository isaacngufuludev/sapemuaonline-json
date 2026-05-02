import { formateDate } from "../../../../utils/helpers";
import { useUsers } from "../../../../hooks/useUsers";
import { useModal } from "../../../../contexts/ModalContext";
import UserAvatar from "../../../../components/shared/UserAvatar";
import ChatAttachments from "../../../../components/shared/ChatAttachments";

function TeacherChatMessagesItem({ item, currUser }) {
  const { users } = useUsers();
  const { toggleSenderDetail, selectEditedItem } = useModal();
  const sender = users.find((user) => user.id === item.senderId);
  const isMine = item.senderId === currUser?.id;
  const timeLabel = item.time ?? formateDate(item.createdAt, "relative");

  function handleSelectSender() {
    selectEditedItem(item);
    toggleSenderDetail();
  }

  return (
    <li className={`flex gap-2 ${isMine ? "justify-end" : "justify-start"}`}>
      {!isMine && (
        <div
          onClick={handleSelectSender}
          className="flex items-end cursor-pointer"
        >
          <UserAvatar user={sender} size="xs" />
        </div>
      )}

      <div
        className={`flex max-w-[75%] flex-col ${
          isMine ? "items-end" : "items-start"
        }`}
      >
        {!isMine && (
          <p className="text-xs font-semibold mb-1 text-gray-600 dark:text-gray-300">
            {sender?.name}
          </p>
        )}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isMine
              ? "bg-blue-700 text-white"
              : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
          }`}
        >
          {item.message && <p className="text-sm">{item.message}</p>}
          <ChatAttachments attachments={item.attachments} />
          {timeLabel && (
            <p
              className={`text-xs mt-1 text-right ${
                isMine ? "text-blue-200" : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {timeLabel}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}

export default TeacherChatMessagesItem;

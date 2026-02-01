import TeacherChats from "./TeacherChats";
import TeacherChatsList from "./TeacherChatList";
import TeacherChatMessages from "./TeacherChatMessages";

function TeacherChatLayout() {
  return (
    <TeacherChats>
      <TeacherChatsList />
      <TeacherChatMessages />
    </TeacherChats>
  );
}

export default TeacherChatLayout;

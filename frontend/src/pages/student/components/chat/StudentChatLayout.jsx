import StudentChatList from "./StudentChatList"
import StudentChat from "./StudentChat"
import StudentChatMessages from "./StudentChatMessages"

function StudentChatLayout() {
  return (
    <StudentChat>
      <StudentChatList/>
      <StudentChatMessages/>
    </StudentChat>
  ) 
}

export default StudentChatLayout

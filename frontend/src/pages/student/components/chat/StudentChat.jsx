function StudentChat({children}) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [chatList, chatMessages] = childrenArray;

  return (
    <div className="h-[calc(100dvh-65px)] relative">
      {chatList}
      <div className="ml-[300px] lg:ml-[400px] h-full">{chatMessages}</div>
    </div>
  );
}

export default StudentChat

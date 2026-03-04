function StudentChat({ children, isMobileChatOpen }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  const [chatList, chatMessages] = childrenArray;

  return (
    <div className="h-[calc(100dvh-65px)] overflow-hidden bg-white dark:bg-gray-800">
      <div className="h-full w-full md:grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
        <aside
          className={`h-full border-r border-gray-200 dark:border-gray-700 overflow-hidden ${
            isMobileChatOpen ? "hidden md:flex" : "flex"
          }`}
        >
          {chatList}
        </aside>

        <section
          className={`h-full overflow-hidden ${
            isMobileChatOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {chatMessages}
        </section>
      </div>
    </div>
  );
}

export default StudentChat

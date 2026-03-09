import { useEffect } from "react";

function StudentChatMessagesList({ containerRef }) {
  useEffect(() => {
    if (!containerRef?.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [containerRef]);

  return (
    <ul className="space-y-6">
      {/* {messages.map((item) => (
        <StudentChatMessageItem key={item.id} item={item} />
      ))} */}
    </ul>
  );
}

export default StudentChatMessagesList;

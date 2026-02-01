function TeacherChats({ children }) {
  return (
    <div className="grid grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] h-[100dvh] bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}

export default TeacherChats;

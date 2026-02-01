function TeacherChatHeader() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          I
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Informática 11-BM
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            25 alunos online
          </p>
        </div>
      </div>

      {/* <div className="flex items-center gap-2">
        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <FiPhone className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <FiVideo className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          <FiMoreVertical className="w-5 h-5" />
        </button>
      </div> */}
    </header>
  );
}

export default TeacherChatHeader;

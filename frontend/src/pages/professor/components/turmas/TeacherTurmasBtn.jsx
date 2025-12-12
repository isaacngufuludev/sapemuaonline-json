function TeacherTurmasBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-2 justify-center bg-blue-700 text-white w-full text-sm rounded-md dark:text-white flex items-center gap-1"
    >
      Ver detalhes
    </button>
  );
}

export default TeacherTurmasBtn;

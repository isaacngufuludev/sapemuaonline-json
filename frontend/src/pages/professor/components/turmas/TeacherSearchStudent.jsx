import { HiOutlineSearch } from "react-icons/hi";

function TeacherSearchStudent() {
  return (
    <input
      type="text"
      placeholder="Pesquisar Estudante"
      className="py-[6px] px-2 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700"
    />
  );
}

export default TeacherSearchStudent;

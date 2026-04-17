import Title3 from "../../../../components/ui/Title3";
import { useAuth } from "../../../../contexts/AuthContext";
import TeacherSearchStudent from "./TeacherSearchStudent";

function TeacherTurmasStudentsHeader({
  searchTerm,
  onSearchTermChange,
  selectedTerm,
  onTermChange,
  selectedSubject,
  onSubjectChange,
}) {
  const { user } = useAuth();
  const teacherSubjects = user?.subjects ?? [];

  return (
    <div className="flex flex-col lg:flex-row bg-white lg:items-center lg:justify-between gap-3 p-4 rounded-md dark:bg-gray-800 border-[0.1px] dark:border-gray-700 border-slate-200">
      <Title3>Todos Estudantes</Title3>
      <div className="w-full lg:w-auto grid grid-cols-1 sm:grid-cols-3 gap-2">
        <TeacherSearchStudent
          className="w-full"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
        <select
          value={selectedTerm}
          onChange={(e) => onTermChange(Number(e.target.value))}
          className="w-full py-[7px] px-4 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700"
        >
          <option value={1}>Iº Trimestre</option>
          <option value={2}>IIº Trimestre</option>
          <option value={3}>IIIº Trimestre</option>
        </select>
        <select
          value={selectedSubject}
          onChange={(e) => onSubjectChange(e.target.value)}
          className="w-full py-[7px] px-4 rounded-md focus:outline-none text-sm dark:bg-gray-800 border bg-white border-slate-200 dark:border-gray-700"
        >
          {teacherSubjects.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TeacherTurmasStudentsHeader;

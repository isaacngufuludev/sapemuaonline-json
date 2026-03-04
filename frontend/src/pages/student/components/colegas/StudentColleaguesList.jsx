import StudentColleaguesItem from "./StudentColleaguesItem";
import { useStudents } from "../../../../hooks/useStudents";
import { useAuth } from "../../../../contexts/AuthContext";

function StudentColleaguesList() {
  const { students } = useStudents();
  const { user } = useAuth();
  const colleagues = students.filter(
    (student) => student.turmaId === user.turmaId && student.id !== user.id,
  );

  return (
    <ul>
      {colleagues.length === 0 && (
        <li className="p-4 text-sm text-gray-500 dark:text-gray-400 border-t-[0.1px] dark:border-gray-700 border-slate-200">
          Nenhum colega encontrado.
        </li>
      )}
      {colleagues.map((item, i) => (
        <StudentColleaguesItem key={item.id} item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentColleaguesList;

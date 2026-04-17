import StudentTeachersItem from "./StudentTeachersItem";
import { useTeachers } from "../../../../hooks/useTeachers";
import { useAuth } from "../../../../contexts/AuthContext";

function StudentTeachersList() {
  const { teachers } = useTeachers();
  const { user } = useAuth();
  const studentTeachers = teachers.filter((teacher) =>
    teacher.turmasId.includes(user.turmaId),
  );

  return (
    <ul>
      {studentTeachers.length === 0 && (
        <li className="p-4 text-sm text-gray-500 dark:text-gray-400 border-t-[0.1px] dark:border-gray-700 border-slate-200">
          Nenhum professor encontrado.
        </li>
      )}
      {studentTeachers.map((item, i) => (
        <StudentTeachersItem key={item.id} item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentTeachersList;

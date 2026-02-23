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
      {studentTeachers.map((item, i) => (
        <StudentTeachersItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentTeachersList;

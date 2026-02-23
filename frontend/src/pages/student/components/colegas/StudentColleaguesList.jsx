import StudentColleaguesItem from "./StudentColleaguesItem";
import { useStudents } from "../../../../hooks/useStudents";
import { useAuth } from "../../../../contexts/AuthContext";

function StudentColleaguesList() {
  const { students } = useStudents();
  const { user } = useAuth();
  const colleagues = students.filter(
    (student) => student.turmaId === user.turmaId && student.id !== user.id,
  );
  console.log(colleagues);

  return (
    <ul>
      {colleagues.map((item, i) => (
        <StudentColleaguesItem item={item} i={i} />
      ))}
    </ul>
  );
}

export default StudentColleaguesList;

import { useParams } from "react-router-dom";
import { useStudents } from "../../../../hooks/useStudents";
import TeacherStudentItem from "./TeacherStudentItem";
import Message from "../../../../components/ui/Message";
import Loading from "../../../../components/shared/Loading";
import TeacherTurmasStudentsHeader from "./TeacherTurmasStudentsHeader";
import TeacherTurmasTitle from "./TeacherTurmasTitle";

function TeacherStudentsList() {
  const { turmaId } = useParams();
  const { students, isLoading } = useStudents();
  const filteredStudents = students.filter(
    (student) => student.turmaId === turmaId,
  );

  return (
    <div>
      {filteredStudents.length > 0 && (
        <div>
          <TeacherTurmasStudentsHeader />
          <TeacherTurmasTitle />
          {isLoading ? (
            <Loading type="blue" size={30} />
          ) : (
            <ul className="overflow-y-scroll h-[500px] no-scrollbar bg-white rounded-md dark:bg-gray-800  border-[0.1px] dark:border-gray-700 border-slate-200">
              {filteredStudents.map((item, i) => (
                <TeacherStudentItem item={item} i={i} />
              ))}
            </ul>
          )}
        </div>
      )}

      {filteredStudents.length === 0 && (
        <Message message="Nenhum estudante encontrado para esta turma." />
      )}
    </div>
  );
}

export default TeacherStudentsList;

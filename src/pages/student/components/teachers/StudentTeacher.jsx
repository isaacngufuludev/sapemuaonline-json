import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";
import StudentTeachersLayout from "./StudentTeachersLayout";
import StudentTeachersList from "./StudentTeachersList";
import StudentTeachersTitle from "./StudentTeachersTitle";

function StudentTeacher() {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="mb-6">
        <Title3>Professores da Turma</Title3>
      </div>
      <StudentTeachersLayout>
        <div className="py-4 px-4">
          <Title4>Todos os Professores</Title4>
        </div>
        <StudentTeachersTitle />
        <StudentTeachersList />
      </StudentTeachersLayout>
    </div>
  );
}

export default StudentTeacher;

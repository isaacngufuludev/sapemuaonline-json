import TeacherTurmasLayout from "./TeacherTurmasLayout";
import Title3 from "../../../../components/ui/Title3";
import TeacherTurmasHeader from "./TeacherTurmasHeader";
import TeacherTurmasList from "./TeacherTurmasList";

function TeacherTurmas() {
  return (
    <TeacherTurmasLayout>
      <div className="mb-6">
        <Title3>Turmas</Title3>
      </div>
      <TeacherTurmasHeader />
      <TeacherTurmasList />
    </TeacherTurmasLayout>
  );
}

export default TeacherTurmas;

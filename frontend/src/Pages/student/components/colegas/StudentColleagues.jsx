import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";
import StudentColleaguesLayout from "./StudentColleaguesLayout";
import StudentColleaguesTitle from "./StudentColleaguesTitle";

function StudentColleagues() {
  return (
    <div>
      <div className="mb-6">
        <Title3>Colegas da Turma</Title3>
      </div>
      <StudentColleaguesLayout>
        <Title4>Todos os Colegas</Title4>
        <StudentColleaguesTitle />
      </StudentColleaguesLayout>
    </div>
  );
}

export default StudentColleagues;

import Title3 from "../../../../components/ui/Title3";
import Title4 from "../../../../components/ui/Title4";
import StudentColleaguesLayout from "./StudentColleaguesLayout";
import StudentColleaguesList from "./StudentColleaguesList";
import StudentColleaguesTitle from "./StudentColleaguesTitle";

function StudentColleagues() {
  return (
    <div className="p-10">
      <div className="mb-6">
        <Title3>Colegas da Turma</Title3>
      </div>
      <StudentColleaguesLayout>
        <div className="py-4 px-4">
          <Title4>Todos os Colegas</Title4>
        </div>
        <StudentColleaguesTitle />
        <StudentColleaguesList />
      </StudentColleaguesLayout>
    </div>
  );
}

export default StudentColleagues;

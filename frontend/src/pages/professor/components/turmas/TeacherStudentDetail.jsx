import Title3 from "../../../../components/ui/Title3";
import TeacherStudentDetailItem from "../../../admin/components/turmas/TeacherStudentDetailItem";

function TeacherStudentDetail() {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="text-center sm:text-left">
        <Title3>Detalhes do Estudante</Title3>
      </div>
      <ul>
        <TeacherStudentDetailItem />
      </ul>
    </div>
  );
}

export default TeacherStudentDetail;

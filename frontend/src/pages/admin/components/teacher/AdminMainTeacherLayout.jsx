import AdminTeacherTitle from "./AdminTeacherTitle";
import AdminSearchTeacher from "./AdminSearchTeacher";
import AdminTeacherList from "./AdminTeacherList";
import AdminTeacherHeading from "./AdminTeacherHeading";
import { useTeachers } from "../../../../hooks/useTeachers";
import Message from "../../../../components/ui/Message";

function AdminMainTeacherLayout() {
  const { teachers } = useTeachers();

  return (
    <div>
      <AdminTeacherHeading />
      {teachers.length > 0 ? (
        <div className="rounded-md ">
          <AdminSearchTeacher />
          <AdminTeacherTitle />
          <AdminTeacherList />
        </div>
      ) : (
        ""
      )}

      <div className="mt-20">
        {!teachers.length ? (
          <Message message="Adicione o Primeiro Professor a Plataforma clicando no botão acima" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default AdminMainTeacherLayout;

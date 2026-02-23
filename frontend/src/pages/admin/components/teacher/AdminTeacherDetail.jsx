import { BsPencil } from "react-icons/bs";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";
import AdminTeacherDetailList from "./AdminTeacherDetailList";
import { useNavigate, useParams } from "react-router-dom";
import { useTeachers } from "../../../../hooks/useTeachers";

function AdminTeacherDetail() {
  const { teacherId } = useParams();
  const { teachers } = useTeachers();
  const navigate = useNavigate();
  const item = teachers.find((item) => item.id === teacherId);

  function handleEdit() {
    navigate(`/area/admin/adminTeacher/add-teacher/${item.id}`);
  }

  return (
    <div>
      <AdminHeading>
        <Title3>Detalhes do Professor #{item?.id} </Title3>
        <AdminButton onClick={handleEdit} type="primary">
          <BsPencil size={16} />
          <span>Editar</span>
        </AdminButton>
      </AdminHeading>
      <div>
        <AdminTeacherDetailList />
      </div>
    </div>
  );
}

export default AdminTeacherDetail;

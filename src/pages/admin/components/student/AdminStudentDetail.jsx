import Title3 from "../../../../components/ui/Title3";
import AdminHeading from "../AdminHeading";
import AdminStudentDetailList from "./AdminStudentDetailList";
import AdminButton from "../AdminButton";
import { BsPencil } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../../../../hooks/useStudents";

function AdminStudentDetail() {
  const { studentId } = useParams();
  const { students } = useStudents();
  const navigate = useNavigate();
  const item = students.find((item) => item.id === studentId);

  function handleEdit() {
    if (!item) return;
    navigate(`/area/admin/adminStudents/add-student/${item.id}`);
  }

  return (
    <div>
      <AdminHeading>
        <div className="text-center sm:text-left">
          <Title3>Detalhes do Estudante #{item?.id}</Title3>
        </div>
        <div className="sm:mx-0">
          <AdminButton onClick={handleEdit} type="primary">
            <BsPencil size={16} />
            <span>Editar</span>
          </AdminButton>
        </div>
      </AdminHeading>
      <div>
        <AdminStudentDetailList />
      </div>
    </div>
  );
}

export default AdminStudentDetail;

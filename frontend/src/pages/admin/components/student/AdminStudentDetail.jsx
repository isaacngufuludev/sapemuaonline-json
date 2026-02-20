import Title3 from "../../../../components/ui/Title3";
import AdminHeading from "../AdminHeading";
import AdminStudentDetailList from "./AdminStudentDetailList";
import AdminButton from "../AdminButton";
import { BsPencil } from "react-icons/bs";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useStudents } from "../../../../hooks/useStudents";
import { useModal } from "../../../../contexts/ModalContext";

function AdminStudentDetail() {
  const { selectEditedItem } = useModal();
  const { studentId } = useParams();
  const { students } = useStudents();
  const navigate = useNavigate();
  const item = students.find((item) => item.id === studentId);
  console.log(item);

  function handleEdit() {
    selectEditedItem(item);
    navigate("/area/admin/adminStudents/add-student");
  }

  return (
    <div>
      <AdminHeading>
        <Title3>Detalhes do Estudante #{item?.id}</Title3>
        <AdminButton onClick={handleEdit} type="primary">
          <BsPencil size={16} />
          <span>Editar</span>
        </AdminButton>
      </AdminHeading>
      <div>
        <AdminStudentDetailList />
      </div>
    </div>
  );
}

export default AdminStudentDetail;

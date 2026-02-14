import { BsPencil } from "react-icons/bs";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";
import AdminTeacherDetailList from "./AdminTeacherDetailList";

function AdminTeacherDetail() {
  return (
    <div>
      <AdminHeading>
        <Title3>Detalhes do Professor</Title3>
        <AdminButton type="primary">
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

import Title3 from "../../../../components/ui/Title3";
import AdminHeading from "../AdminHeading";
import AdminStudentDetailList from "./AdminStudentDetailList";
import AdminButton from "../AdminButton";
import { BsPencil } from "react-icons/bs";

function AdminStudentDetail() {
  return (
    <div>
      <AdminHeading>
        <Title3>Detalhes do Estudante</Title3>
        <AdminButton type="primary">
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

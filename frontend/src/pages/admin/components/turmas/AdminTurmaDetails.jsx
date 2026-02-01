import { HiOutlinePlus, HiPlus } from "react-icons/hi";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";
import AdminHeading from "../AdminHeading";
import AdminTurmasDetailList from "./AdminTurmasDetailList";

function AdminTurmaDetails() {
  return (
    <div>
      <AdminHeading>
        <Title3>Informática-10ªClasse-Manhã</Title3>
        <AdminButton type="primary">
          <p>
            <HiOutlinePlus />
          </p>
          <p>Disciplina</p>
        </AdminButton>
      </AdminHeading>
      <div>
        <AdminTurmasDetailList />
      </div>
    </div>
  );
}

export default AdminTurmaDetails;

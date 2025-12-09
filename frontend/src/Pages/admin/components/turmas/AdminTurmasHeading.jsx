import AdminHeading from "../AdminHeading";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";

import { HiOutlinePlus } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";

function AdminTurmasHeading() {
  const { toggleTurmaModal } = useModal();

  return (
    <div>
      <AdminHeading>
        <Title3>Turmas e Cursos</Title3>
        <AdminButton type="primary" onClick={toggleTurmaModal}>
          <p>
            <HiOutlinePlus />
          </p>
          <p>Turma</p>
        </AdminButton>
      </AdminHeading>
    </div>
  );
}

export default AdminTurmasHeading;

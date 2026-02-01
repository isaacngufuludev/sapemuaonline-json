import AdminHeading from "../AdminHeading";
import Title3 from "../../../../components/ui/Title3";
import AdminButton from "../AdminButton";

import { HiOutlinePlus } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";

function AdminTurmasHeading() {
  const { toggleTurmaModal, toggleCourseModal, toggleClassModal } = useModal();

  return (
    <AdminHeading>
      <Title3>Turmas e Cursos</Title3>
      <div className="flex items-center gap-2">
        <AdminButton type="primary" onClick={toggleCourseModal}>
          <p>
            <HiOutlinePlus />
          </p>
          <p>Curso</p>
        </AdminButton>
        <AdminButton type="primary" onClick={toggleClassModal}>
          <p>
            <HiOutlinePlus />
          </p>
          <p>Classe</p>
        </AdminButton>
        <AdminButton type="primary" onClick={toggleTurmaModal}>
          <p>
            <HiOutlinePlus />
          </p>
          <p>Turma</p>
        </AdminButton>
      </div>
    </AdminHeading>
  );
}

export default AdminTurmasHeading;

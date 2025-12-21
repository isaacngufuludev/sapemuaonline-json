import Title4 from "../../../../components/ui/Title4";
import AdminAddHeader from "../AdminAddHeader";
import ModalTurma from "./ModalTurma";
import AdminTurmasHeading from "./AdminTurmasHeading";
import AdminTurmasLayout from "./AdminTurmasLayout";
import Overlay from "../../../../components/shared/Overlay";
import AdminTurmasCourses from "./AdminTurmasCourses";
import BtnEdit from "../../../../components/ui/BtnEdit";

import { HiOutlineTrash } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";
import ModalRemoveTurma from "./ModalRemoveTurma";

function AdminTurmas() {
  const { isTurmaModal } = useModal();

  return (
    <div>
      <AdminTurmasHeading />
      <AdminTurmasLayout>
        <AdminAddHeader type="turma">
          <Title4># Informática</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
        <AdminAddHeader type="turma">
          <Title4># Gestão Empresarial</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
        <AdminAddHeader type="turma">
          <Title4># Electricidade</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
        <AdminAddHeader type="turma">
          <Title4># Electronica e Telecomunicação</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
        <AdminAddHeader type="turma">
          <Title4># Finanças</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
        <AdminAddHeader type="turma">
          <Title4># Gestão de Recursos Humanos</Title4>
          <BtnEdit type="delete">
            <HiOutlineTrash />
          </BtnEdit>
        </AdminAddHeader>
        <div>
          <AdminTurmasCourses />
        </div>
      </AdminTurmasLayout>

      {isTurmaModal ? (
        <div>
          <ModalTurma />
          <Overlay />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminTurmas;

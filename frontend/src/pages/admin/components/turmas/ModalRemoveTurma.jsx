import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import BtnModal from "../../../../components/shared/BtnModal";
import Modal from "../../../../components/shared/Modal";

import { useModal } from "../../../../contexts/ModalContext";
import { BsX } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

function ModalRemoveTurma() {
  const { toggle } = useModal();

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Eliminar Turma</Title3>
      <p className="text-sm mb-5">
        Tens a Certeza que queres eliminar esta turma?
      </p>
      <div className="flex gap-2 justify-end">
        <BtnModal type="smallSecondary" onClick={toggle}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Não</p>
        </BtnModal>
        <BtnModal type="smallPrimary">
          <p className="text-lg">
            <MdOutlineDone />
          </p>
          <p>Sim</p>
        </BtnModal>
      </div>
    </Modal>
  );
}

export default ModalRemoveTurma;

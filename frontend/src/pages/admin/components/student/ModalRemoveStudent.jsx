import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import BtnModal from "../../../../components/shared/BtnModal";
import Modal from "../../../../components/shared/Modal";

import { HiOutlineTrash } from "react-icons/hi";

function ModalRemoveStudent() {
  return (
    <Modal>
      <BtnCloseModal />
      <div className="flex items-center gap-3 mb-3">
        <p className="text-red-700 bg-red-100 p-2  text-xl rounded-full inline-block ">
          <HiOutlineTrash />
        </p>
        <Title3>Eliminar Estudante</Title3>
      </div>
      <p className="text-sm mb-5  ">
        Tens a Certeza que queres eliminar este estudante?
      </p>
      <BtnModal type="remove">Eliminar Estudante</BtnModal>
    </Modal>
  );
}

export default ModalRemoveStudent;

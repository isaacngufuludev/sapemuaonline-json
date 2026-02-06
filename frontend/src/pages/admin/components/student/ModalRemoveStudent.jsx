import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import BtnModal from "../../../../components/shared/BtnModal";
import Modal from "../../../../components/shared/Modal";
import { useModal } from "../../../../contexts/ModalContext";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { remove } from "../../../../services/api";

import { HiOutlineTrash } from "react-icons/hi";
import { useToast } from "../../../../hooks/useToast";

function ModalRemoveStudent() {
  const { selectedItem, toggleRemoveStudent } = useModal();
  const { triggerRefresh } = useRefresh();
  const { showSuccess, showError } = useToast();

  async function handleDelete() {
    if (!selectedItem) return;

    try {
      await remove("users", selectedItem.id);
      triggerRefresh();
      toggleRemoveStudent();
      showSuccess("Estudante eliminado com sucesso");
    } catch (error) {
      showError(error.message);
    }
  }

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
      <BtnModal type="remove" onClick={handleDelete}>
        Eliminar Estudante
      </BtnModal>
    </Modal>
  );
}

export default ModalRemoveStudent;

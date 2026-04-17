import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import BtnModal from "../../../../components/shared/BtnModal";
import Modal from "../../../../components/shared/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";
import { remove } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { useToast } from "../../../../hooks/useToast";

function ModalRemoveTeacher() {
  const { selectedItem, toggleRemoveTeacher } = useModal();
  const { triggerRefresh } = useRefresh();
  const { showSuccess, showError } = useToast();

  async function handleDelete() {
    if (!selectedItem) return;

    try {
      await remove("users", selectedItem.id);
      showSuccess("Eliminar Professor com sucesso");
      triggerRefresh();
      toggleRemoveTeacher();
    } catch (error) {
      showError(error.message);
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <p className="text-red-700 bg-red-100 p-2  text-xl rounded-full inline-block ">
          <HiOutlineTrash />
        </p>
        <Title3>Eliminar Professor</Title3>
      </div>
      <p className="text-sm mb-5  ">
        Tens a Certeza que queres eliminar este professor?
      </p>
      <BtnModal type="remove" onClick={handleDelete}>
        Eliminar Professor
      </BtnModal>
    </Modal>
  );
}

export default ModalRemoveTeacher;

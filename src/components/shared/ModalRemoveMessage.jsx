import BtnCloseModal from "./BtnCloseModal";
import BtnModal from "./BtnModal";
import Modal from "./Modal";
import Title3 from "../ui/Title3";
import { HiOutlineTrash } from "react-icons/hi";
import { useModal } from "../../contexts/ModalContext";
import { useRefresh } from "../../contexts/RefreshContext";
import { useToast } from "../../hooks/useToast";
import { remove } from "../../services/api";

function ModalRemoveMessage() {
  const { selectedItem, toggleRemoveMessage } = useModal();
  const { triggerRefresh } = useRefresh();
  const { showError, showSuccess } = useToast();

  async function handleDelete() {
    if (!selectedItem) return;

    try {
      const attachments = selectedItem.attachments || [];

      await Promise.all([
        remove("messages", selectedItem.id),
        ...attachments
          .map((attachment) => attachment.fileId || attachment.file?.id)
          .filter(Boolean)
          .map((fileId) => remove("files", fileId)),
      ]);

      showSuccess("Mensagem eliminada com sucesso");
      triggerRefresh();
      toggleRemoveMessage();
    } catch (error) {
      showError(error.message || "Erro ao eliminar mensagem");
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <p className="inline-block rounded-full bg-red-100 p-2 text-xl text-red-700">
          <HiOutlineTrash />
        </p>
        <Title3>Eliminar Mensagem</Title3>
      </div>
      <p className="mb-5 text-sm">
        Tens a certeza que queres eliminar esta mensagem?
      </p>
      <BtnModal type="remove" onClick={handleDelete}>
        Eliminar Mensagem
      </BtnModal>
    </Modal>
  );
}

export default ModalRemoveMessage;

import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import BtnModal from "../../../../components/shared/BtnModal";
import Modal from "../../../../components/shared/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import { useModal } from "../../../../contexts/ModalContext";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { remove } from "../../../../services/api";
import { useTurmas } from "../../../../hooks/useTurmas";
import { useClasses } from "../../../../hooks/useClasses";
import { useToast } from "../../../../hooks/useToast";

function ModalRemoveCourse() {
  const { toggleCourse, selectedItem } = useModal();
  const { triggerRefresh } = useRefresh();
  const { turmas } = useTurmas();
  const { classes } = useClasses();
  const { showError, showSuccess } = useToast();

  const idToDelete = selectedItem.id;
  const courseTurmas = turmas.filter((turma) => turma.courseId === idToDelete);
  const courseClasses = classes.filter(
    (classe) => classe.courseId === idToDelete,
  );
  async function handleDelete() {
    if (!selectedItem) return;

    try {
      await remove("courses", selectedItem.id);
      await Promise.allSettled(
        courseTurmas.map((item) => remove("turmas", item.id)),
      );
      await Promise.allSettled(
        courseClasses.map((item) => remove("classes", item.id)),
      );

      showSuccess("Curso removido com sucesso!");
    } catch (error) {
      showError(error.message);
    } finally {
      toggleCourse();
      triggerRefresh();
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <p className="text-red-700 bg-red-100 p-2  text-xl rounded-full inline-block ">
          <HiOutlineTrash />
        </p>
        <Title3>Eliminar Curso</Title3>
      </div>
      <p className="text-sm mb-5  ">
        Tens a Certeza que queres eliminar este curso?
      </p>
      <BtnModal onClick={handleDelete} type="remove">
        Eliminar Curso
      </BtnModal>
    </Modal>
  );
}

export default ModalRemoveCourse;

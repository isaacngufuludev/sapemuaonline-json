import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import Modal from "../../../../components/shared/Modal";
import AdminButton from "../AdminButton";
import ModalForm from "../../../../components/shared/ModalForm";
import Loading from "../../../../components/shared/Loading";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";
import { post } from "../../../../services/api";
import { useModal } from "../../../../contexts/ModalContext";
import { useToast } from "../../../../hooks/useToast";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { formateDate } from "../../../../utils/helpers";

function ModalCourse() {
  const [courseName, setCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showWarning } = useToast();
  const { toggle } = useModal();
  const { triggerRefresh } = useRefresh();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!courseName) {
      showWarning("Por favor preencha todos os campos!");
      return;
    }

    const newCourse = {
      dateIn: formateDate(new Date()),
      courseName,
    };

    try {
      setIsLoading(true);
      await post("courses", newCourse);
      showSuccess("Curso cadastrado com sucesso!");
      triggerRefresh();
      toggle();
      console.log("Novo Curso:", newCourse);
    } catch (error) {
      showWarning(error.message || "Erro ao cadastrar curso");
    } finally {
      setIsLoading(false);
    }

    setCourseName("");
  }

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Curso</Title3>
      <p className="text-sm mb-4">Preencha o fórmulário para cadastrar curso</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <AdminLabel htmlFor="course">Nome do Curso</AdminLabel>
          <AdminInput
            id="course"
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <p className="text-xs mb-7">
          OBS: Verifique bem o nome antes finalizar o cadastro
        </p>

        <div className="flex justify-end">
          <AdminButton type="primary" disabled={isLoading}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <p className="text-lg">
                  <MdOutlineDone />
                </p>
                <p>Cadastrar Curso</p>
              </>
            )}
          </AdminButton>
        </div>
      </form>
    </Modal>
  );
}

export default ModalCourse;

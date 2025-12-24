import { MdOutlineDone } from "react-icons/md";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Title3 from "../../../../components/ui/Title3";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import Modal from "../../../../components/shared/Modal";
import AdminButton from "../AdminButton";

function ModalCourse() {
  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Curso</Title3>
      <p className="text-sm mb-2">Preencha o fórmulário para cadastrar curso</p>
      <form>
        <div className="mb-5">
          <AdminLabel htmlFor="course">Nome do Curso</AdminLabel>
          <AdminInput id="course" type="text" />
        </div>
        <p className="text-xs mb-7">
          Verifique bem o nome antes finalixar o cadastro
        </p>
        <div className="flex justify-end">
          <AdminButton type="primary">
            <p className="text-lg">
              <MdOutlineDone />
            </p>
            <p>Cadastrar Curso</p>
          </AdminButton>
        </div>
      </form>
    </Modal>
  );
}

export default ModalCourse;

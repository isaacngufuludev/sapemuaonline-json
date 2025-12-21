import { BsX } from "react-icons/bs";
import { useModal } from "../../../../contexts/ModalContext";
import { MdOutlineDone } from "react-icons/md";

import Title3 from "../../../../components/ui/Title3";
import AdminLabel from "../AdminLabel";
import AdminInput from "../AdminInput";
import AdminSelect from "../AdminSelect";
import AdminButton from "../AdminButton";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import Modal from "../../../../components/shared/Modal";

function ModalTurma() {
  const { toggle } = useModal();

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Turma</Title3>
      <p className="text-xs mb-2">
        Preencha os campos para cadastrar nova turma
      </p>
      <form className="grid grid-cols-2 gap-3 mb-7">
        <div>
          <AdminLabel htmlFor="classe">Classe</AdminLabel>
          <AdminSelect>
            <option>Nenhum Selecionado</option>
            <option value="">10ª Classe</option>
            <option value="">11ª Classe</option>
            <option value="">12ª Classe</option>
            <option value="">13ª Classe</option>
          </AdminSelect>
        </div>
        <div>
          <AdminLabel htmlFor="sala">Número da sala</AdminLabel>
          <AdminInput type="number" id="sala" />
        </div>
        <div>
          <AdminLabel>Número da curso</AdminLabel>
          <AdminSelect>
            <option>Nenhum Selecionado</option>
            <option value="">Informática</option>
            <option value="">Gestão Empresarial</option>
            <option value="">Electricidade</option>
            <option value="">Electronica e Telecomunicações</option>
            <option value="">Finanças</option>
            <option value="">Gestão de Recursos Humanos</option>
          </AdminSelect>
        </div>
        <div>
          <AdminLabel>Selecionar Periodo</AdminLabel>
          <AdminSelect>
            <option>Nenhum Selecionado</option>
            <option value="">Manhã</option>
            <option value="">Tarde</option>
          </AdminSelect>
        </div>
      </form>
      <div className="flex gap-2 justify-end">
        <AdminButton type="secondary" onClick={toggle}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Cancelar</p>
        </AdminButton>
        <AdminButton type="primary">
          <p className="text-lg">
            <MdOutlineDone />
          </p>
          <p>Cadastrar</p>
        </AdminButton>
      </div>
    </Modal>
  );
}

export default ModalTurma;

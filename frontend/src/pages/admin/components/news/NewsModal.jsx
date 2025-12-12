import { useModal } from "../../../../contexts/ModalContext";
import { BsX } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

import AdminBtnCloseModal from "../AdminBtnCloseModal";
import AdminButton from "../AdminButton";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import AdminModal from "../AdminModal";
import Title3 from "../../../../components/ui/Title3";

function NewsModal() {
  const { toggle } = useModal();

  return (
    <AdminModal>
      <AdminBtnCloseModal />
      <Title3>Adicionar noticia</Title3>
      <p className="text-xs mb-2">
        Preencha os campos para adicionar uma nova noticia
      </p>
      <form>
        <AdminLabel htmlFor="title">Titulo</AdminLabel>
        <AdminInput type="text" id="title" />
        <AdminLabel htmlFor="description">Descrição</AdminLabel>
        <AdminInput type="description" id="description" />
      </form>
      <div className="flex gap-2 justify-end mt-6">
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
    </AdminModal>
  );
}

export default NewsModal;

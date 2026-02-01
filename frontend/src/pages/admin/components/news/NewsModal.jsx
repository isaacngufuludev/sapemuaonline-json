import { useModal } from "../../../../contexts/ModalContext";
import { BsX } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { useState } from "react";
import { useToast } from "../../../../hooks/useToast";
import { post } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { formateDate } from "../../../../utils/helpers";

import Title3 from "../../../../components/ui/Title3";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import AdminButton from "../AdminButton";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import Modal from "../../../../components/shared/Modal";
import ModalForm from "../../../../components/shared/ModalForm";

function NewsModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { toggle } = useModal();
  const { showSuccess, showWarning, showError } = useToast();
  const { triggerRefresh } = useRefresh();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) {
      showWarning("Por favor preencha todos os campos");
      return;
    }

    const news = {
      title,
      description,
      date: formateDate(new Date(), "numeric"),
    };

    try {
      await post("news", news);
      showSuccess("Notícia cadastrada com sucesso!");
      triggerRefresh();
      toggle();
    } catch (error) {
      showError(error.message || "Erro ao cadastrar notícia");
    }
  }

  return (
    <Modal>
      <BtnCloseModal />
      <Title3>Cadastrar Noticia</Title3>
      <p className="text-xs mb-4">
        Preencha os campos para adicionar uma nova noticia
      </p>
      <ModalForm onSubmit={handleSubmit}>
        <AdminLabel htmlFor="title">Titulo</AdminLabel>
        <AdminInput
          value={title}
          type="text"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <AdminLabel htmlFor="description">Descrição</AdminLabel>
        <AdminInput
          value={description}
          type="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex gap-1 justify-end mt-6">
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
      </ModalForm>
    </Modal>
  );
}

export default NewsModal;

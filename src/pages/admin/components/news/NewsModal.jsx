import { useModal } from "../../../../contexts/ModalContext";
import { BsX } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useState } from "react";
import { useToast } from "../../../../hooks/useToast";
import { patch, post } from "../../../../services/api";
import { useRefresh } from "../../../../contexts/RefreshContext";
import { formateDate } from "../../../../utils/helpers";

import Title3 from "../../../../components/ui/Title3";
import BtnCloseModal from "../../../../components/shared/BtnCloseModal";
import AdminButton from "../AdminButton";
import AdminInput from "../AdminInput";
import AdminLabel from "../AdminLabel";
import Modal from "../../../../components/shared/Modal";
import FloatInput from "../../../auth/components/AuthInput";
import FloatInputLabel from "../../../../components/ui/FloatInputLabel";

const initialState = {
  title: "",
  date: "",
  description: "",
};

function NewsModal({ editedItem }) {
  const [formData, setFormData] = useState(initialState);
  const { toggle, selectEditedItem } = useModal();
  const { showSuccess, showWarning, showError } = useToast();
  const { triggerRefresh } = useRefresh();

  useEffect(() => {
    if (editedItem) {
      setFormData({
        title: editedItem.title,
        date: editedItem.date,
        description: editedItem.description,
      });
    } else {
      setFormData(initialState);
    }
  }, [editedItem]);

  function handleClose() {
    setFormData(initialState);
    selectEditedItem(null);
    toggle();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      showWarning("Por favor preencha todos os campos");
      return;
    }

    const news = {
      ...formData,
      date: formData.date || formateDate(new Date(), "numeric"),
      dateIn: editedItem ? editedItem.dateIn : formateDate(new Date()),
    };

    try {
      if (editedItem) {
        await patch("news", editedItem.id, news);
        showSuccess("Comunicado atualizado com sucesso!");
      } else {
        await post("news", news);
        showSuccess("Comunicado cadastrado com sucesso!");
      }

      triggerRefresh();
      handleClose();
    } catch (error) {
      showError(error.message || "Erro ao salvar comunicado");
    }
  }

  return (
    <Modal>
      <BtnCloseModal onClick={handleClose} />

      <Title3>{editedItem ? "Atualizar Noticia" : "Cadastrar Noticia"}</Title3>

      <p className="text-xs mb-4">
        {editedItem
          ? "Atualize os campos para atualizar a noticia"
          : "Preencha os campos para adicionar uma nova noticia"}
      </p>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <FloatInputLabel
            value={formData.title}
            name="Titulo"
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </div>
        <div>
          <FloatInputLabel
            value={formData.date}
            type="date"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </div>

        <div>
          <AdminInput
            id="description"
            placeholder="Descrição"
            type="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <AdminButton type="secondary" onClick={handleClose}>
            <BsX className="text-lg" />
            Cancelar
          </AdminButton>

          <AdminButton type="primary">
            <MdOutlineDone className="text-lg" />
            {editedItem ? "Atualizar" : "Cadastrar"}
          </AdminButton>
        </div>
      </form>
    </Modal>
  );
}

export default NewsModal;

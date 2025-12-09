import { MdOutlineDone } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { useModal } from "../../contexts/ModalContext";
import { useNavigate } from "react-router-dom";

import AdminBtnCloseModal from "../../Pages/admin/components/AdminBtnCloseModal";
import AdminButton from "../../Pages/admin/components/AdminButton";
import AdminModal from "../../Pages/admin/components/AdminModal";
import Title3 from "../ui/Title3";

function LogoutModal() {
  const { toggle } = useModal();
  const navigate = useNavigate();

  const init = () => {
    toggle();
    navigate("/login");
  };

  return (
    <AdminModal>
      <AdminBtnCloseModal />
      <Title3>Terminar Sessão</Title3>
      <p className="text-sm mb-5">Tens a Certeza que queres terminar sessão?</p>
      <div className="flex gap-2 justify-end">
        <AdminButton type="smallSecondary" onClick={toggle}>
          <p className="text-lg">
            <BsX />
          </p>
          <p>Não</p>
        </AdminButton>
        <AdminButton type="smallPrimary" onClick={init}>
          <p className="text-lg">
            <MdOutlineDone />
          </p>
          <p>Sim</p>
        </AdminButton>
      </div>
    </AdminModal>
  );
}

export default LogoutModal;
